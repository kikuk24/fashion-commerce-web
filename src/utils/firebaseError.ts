import { FirebaseError } from "firebase/app";

export const getErrorMessage = (error: unknown): string => {
    if (error instanceof FirebaseError) {
        const errorMessages: { [key: string]: string } = {
            "auth/invalid-email": "Email atau password salah!",
            "auth/invalid-credential": "Email atau password salah!",
            "auth/user-not-found": "Akun tidak ditemukan!",
            "auth/wrong-password": "Email atau password salah!",
            "auth/user-disabled": "Akun telah dinonaktifkan!",
            "auth/too-many-requests": "Terlalu banyak percobaan, coba lagi nanti!",
            "auth/network-request-failed": "Koneksi internet bermasalah!",
            "auth/email-already-in-use": "Email anda sudah terdaftar, harap login!",
            "auth/cancelled-popup-request": "",
            "auth/popup-closed-by-user": "",
            "auth/popup-blocked": "",
        };

        return errorMessages[error.code] || "Terjadi kesalahan, coba lagi!";
    }

    return "Terjadi kesalahan, coba lagi!";
};
