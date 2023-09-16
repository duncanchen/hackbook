# Online eBook Builder

Welcome to the Online eBook Builder - a Hackathon project designed to give users the power to create, edit, and publish their own eBooks seamlessly on the web. Built with Next.js and Supabase and adorned with the sleek Radix-theme UI, the eBook Builder stands as a testament to modern web capabilities and design.

## Features:

1. **Intuitive eBook Creation**: Create a new eBook with just a few clicks and start adding content immediately.
2. **GitHub Authentication**: Use your existing GitHub account to sign in, ensuring the security and convenience of OAuth.
3. **Dynamic Editing**: Use our dynamic editor to add text, images, and other multimedia to your eBook.
4. **Responsive Design**: Built on Radix-theme UI, experience a sleek and responsive design across all devices.
5. **Database Capabilities with Supabase**: Store your eBook projects securely with the power of Supabase.

## Quick Start:

1. **Clone the Repository**:
   ```
   git clone https://github.com/[your_github_username]/online-ebook-builder.git
   ```

2. **Navigate to the Project Directory**:
   ```
   cd online-ebook-builder
   ```

3. **Install Dependencies**:
   ```
   npm install
   ```

4. **Set up Supabase & GitHub OAuth**:
   - Create a Supabase project and set up the necessary tables.
   - Set up GitHub OAuth for authentication.
   - Save the environment variables in a `.env.local` file. 

   Sample:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   GITHUB_CLIENT_ID=your_github_client_id
   GITHUB_SECRET=your_github_secret
   ```

5. **Run the Development Server**:
   ```
   npm run dev
   ```

## Contributing:

If you wish to contribute, please:
1. Fork the repository.
2. Create a new branch with a meaningful name.
3. Commit and push your changes.
4. Create a pull request detailing the changes and the reasons.

## Credits:

- **Next.js**: The React framework used for building the application.
- **Supabase**: For the backend and database functionalities.
- **Radix-theme**: For the beautiful and responsive UI.
- **GitHub OAuth**: For secure and easy authentication.

## License:
This project is licensed under the MIT License.

## Contact:
For more information or if you run into issues, feel free to reach out at [your_email@example.com].

---

We hope you enjoy the Online eBook Builder as much as we enjoyed building it. Happy eBook creation! 📖🚀