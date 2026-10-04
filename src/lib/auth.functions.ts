import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

const INVALID = "Incorrect email/username or password.";

// Lets players sign in with either their email or their username,
// without ever exposing other players' emails to the browser.
export const signInWithIdentifier = createServerFn({ method: "POST" })
  .inputValidator((d) =>
    z
      .object({
        identifier: z.string().trim().min(1).max(255),
        password: z.string().min(1).max(200),
      })
      .parse(d),
  )
  .handler(async ({ data }) => {
    let email = data.identifier;
    if (!email.includes("@")) {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      const { data: row } = await supabaseAdmin
        .from("profiles")
        .select("email")
        .ilike("username", email)
        .maybeSingle();
      if (!row) return { error: INVALID };
      email = row.email;
    }
    const sb = createClient(process.env["SUPABASE_URL"]!, process.env["SUPABASE_PUBLISHABLE_KEY"]!, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
    const { data: res, error } = await sb.auth.signInWithPassword({ email, password: data.password });
    if (error || !res.session) {
      const msg = error?.message?.toLowerCase().includes("not confirmed")
        ? "Please confirm your email first — check your inbox."
        : INVALID;
      return { error: msg };
    }
    return {
      error: null,
      access_token: res.session.access_token,
      refresh_token: res.session.refresh_token,
    };
  });
