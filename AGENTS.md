<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->
- Auth uses Lovable Cloud email/password; profiles table (id, username, email) filled by an auth.users trigger. Why: username + email login without exposing emails.
- Username-or-email login goes through the signInWithIdentifier server function, which returns session tokens the client sets. Why: username→email lookup stays server-side.
- Global auth state lives in AuthProvider (src/hooks/use-auth.tsx) mounted in __root. Why: navbar and profile share one session source.
- The uploaded logo is served through a Lovable Assets pointer; generated six-player concept art remains imported from project assets. Why: preserve the exact supplied logo while keeping generated visuals local to the app.
