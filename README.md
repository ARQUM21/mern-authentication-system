# 🔐 MERN Authentication System

<div align="center">

![MERN Auth](https://img.shields.io/badge/MERN-Authentication-blue?style=for-the-badge&logo=react&logoColor=white)

A modern **full-stack authentication system** built with **React**, **Node.js**, **Express**, and **MongoDB**. Complete **user authentication platform** with Email OTP verification, Google OAuth, JWT tokens, and secure password reset.

[![Live Demo](https://img.shields.io/badge/🔗_Live_Demo-Visit_Site-success?style=for-the-badge)](https://mern-authentication-system-lemon.vercel.app/)

</div>

---

## 🔥 Keywords

> MERN Stack Authentication | React Login System | Node.js Authentication | JWT Token Authentication | Email OTP Verification | Google OAuth Login | Password Reset | Full Stack Security | MongoDB User Management | Secure Login System | React Authentication | Passport.js Integration

---

## ✨ Features

### 🔐 Authentication Features
- 📧 **Email & Password Registration** - Secure account creation
- 🔑 **JWT Token Authentication** - Stateless authentication with HTTP-only cookies
- ✉️ **Email OTP Verification** - 6-digit OTP for account verification
- 🔒 **Password Reset with OTP** - Secure password recovery
- 🌐 **Google OAuth 2.0 Login** - One-click social authentication
- 🛡️ **Protected Routes** - Middleware-based access control
- 🍪 **Secure HTTP-only Cookies** - XSS protection
- 🔐 **Password Hashing** - bcrypt encryption
- ⏱️ **OTP Expiration** - 2-minute validity period
- 📱 **Fully Responsive UI** - Mobile, Tablet, Desktop
- 🔔 **Toast Notifications** - Real-time user feedback
- 📧 **Welcome Emails** - Automated email notifications

### 🎨 UI/UX Features
- 🎯 **Modern Gradient Design** - Beautiful blue-purple theme
- 👁️ **Password Visibility Toggle** - Eye icon for show/hide
- ⏳ **OTP Countdown Timer** - Visual countdown with resend option
- 🔄 **Smooth Transitions** - Polished animations
- 📋 **Auto-focus Input Fields** - Enhanced user experience
- 📱 **Mobile-First Design** - Optimized for all devices

---

## 🛠️ Tech Stack

<div align="center">

| Frontend | Backend | Database | Authentication | Tools |
|:--------:|:-------:|:--------:|:--------------:|:-----:|
| ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) | ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white) | ![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white) | ![Nodemailer](https://img.shields.io/badge/Nodemailer-0078D4?style=for-the-badge&logo=gmail&logoColor=white) |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) | ![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) | ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white) | ![Passport](https://img.shields.io/badge/Passport-34E27A?style=for-the-badge&logo=passport&logoColor=white) | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) |
| ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) | ![bcrypt](https://img.shields.io/badge/bcrypt-338933?style=for-the-badge&logo=letsencrypt&logoColor=white) |  | ![Google OAuth](https://img.shields.io/badge/Google_OAuth-4285F4?style=for-the-badge&logo=google&logoColor=white) | ![React Icons](https://img.shields.io/badge/React_Icons-61DAFB?style=for-the-badge&logo=react&logoColor=black) |

</div>

---

## 📸 Screenshots

### 🔑 Login & Registration
![Login Page](./screenshots/login.png)

### ✉️ Email OTP Verification
![Email Verify](./screenshots/email-verify.png)

### 🔒 Password Reset Flow

#### Step 1: Enter Email
![Reset Email](./screenshots/reset-email.png)

#### Step 2: Enter OTP
![Reset OTP](./screenshots/reset-otp.png)

#### Step 3: Set New Password
![New Password](./screenshots/new-password.png)

### 🏠 Home Page
![Home Page](./screenshots/home.png)

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas Account
- Gmail Account (for sending emails)
- Google Cloud Console (for OAuth)

### 1. Clone the Repository
```bash
git clone https://github.com/ARQUM21/mern-authentication-system.git
cd mern-authentication-system
```
 
### 2. Install Dependencies
```bash
# Install Backend Dependencies
cd server
npm install

# Install Frontend Dependencies
cd ../client
npm install
```

### 3. Backend Environment Variables

Create `.env` file in **server** folder:
```env
PORT=4000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mern-auth?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key_here
NODE_ENV=development

# Email Configuration (Gmail)
SENDER_EMAIL=your-email@gmail.com
APP_PASSWORD=your_gmail_app_password

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Frontend URL
FRONTEND_URL=http://localhost:5173
```

### 4. Frontend Environment Variables

Create `.env` file in **client** folder:
```env
VITE_BACKEND_URL=http://localhost:4000
```

### 5. Gmail App Password Setup

1. Go to Google Account → Security
2. Enable 2-Step Verification
3. Go to App Passwords
4. Generate password for "Mail"
5. Copy the 16-character password to `APP_PASSWORD` in `.env`

### 6. Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
```
   http://localhost:4000/auth/google/callback
```
6. Copy Client ID and Secret to `.env`

### 7. Run the Application
```bash
# Run Backend (from server folder)
cd server
npm run dev

# Run Frontend (from client folder, new terminal)
cd client
npm run dev
```

### 8. Open in Browser
```
Frontend: http://localhost:5173
Backend:  http://localhost:4000
```

---

## 🔒 Security Features

- ✅ **Password Hashing** - bcrypt with salt rounds
- ✅ **HTTP-only Cookies** - Prevents XSS attacks
- ✅ **CORS Protection** - Restricted origins
- ✅ **JWT Expiration** - 7-day token validity
- ✅ **OTP Expiration** - 2-minute validity
- ✅ **Input Validation** - Server-side validation
- ✅ **Environment Variables** - Sensitive data protection
- ✅ **Secure Cookie Settings** - Production-ready configuration

---

## 🚀 Deployment (Vercel)

### Backend Deployment

1. Push code to GitHub
2. Import project to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Frontend Deployment

1. Push code to GitHub
2. Import project to Vercel
3. Add `VITE_BACKEND_URL` in environment variables
4. Deploy

### Important: Update URLs

After deployment, update:
- Backend `FRONTEND_URL` → Your Vercel frontend URL
- Frontend `VITE_BACKEND_URL` → Your Vercel backend URL
- Google OAuth redirect URI → Your production backend URL

---

## 🔮 Future Enhancements

- [ ] Two-Factor Authentication (2FA)
- [ ] Account Deletion
- [ ] Profile Picture Upload
- [ ] Email Change with Verification
- [ ] Session Management Dashboard
- [ ] Login History & Activity Log
- [ ] Rate Limiting for API Endpoints
- [ ] Account Lockout after Failed Attempts


---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues and pull requests.
```bash
1. Fork the repository
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request
```

---

## 📧 Contact

<div align="center">

**Muhammad Arqum Tariq**

[![GitHub](https://img.shields.io/badge/GitHub-ARQUM21-181717?style=for-the-badge&logo=github)](https://github.com/ARQUM21)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Muhammad_Arqum_Tariq-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/muhammadarqumtariq/)
[![Email](https://img.shields.io/badge/Email-marqum987@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:marqum987@gmail.com)

</div>

---

## ⭐ Show Your Support

Give a ⭐ if you like this project!

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

### Made with ❤️ by Muhammad Arqum Tariq

![Visitors](https://api.visitorbadge.io/api/visitors?path=ARQUM21%2Fmern-authentication-system&label=Visitors&countColor=%23263759)

</div>
```
