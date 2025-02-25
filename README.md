# Registration / Create account flow

1. User enters full name and email
2. Check if the user already exist using the email (we will use this to identify if we still need to create a user document or not)
3. Send OTP to user's email
4. This will send a secret key for creating a session. The secret key or OTP will be sent to the user's account email.
5. Create a new user document if the user is a new user
6. Return the user's accountId that will be used to complete the login process later with the OTP
7. Verify OTP and authenticate to login
