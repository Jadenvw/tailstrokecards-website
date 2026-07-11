"use client";

import { useEffect } from "react";

interface SnackbarProps {
    message: string;
    visible: boolean;
    onClose: () => void;
    duration?: number;
}

export default function Snackbar({ message, visible, onClose, duration = 2500 }: SnackbarProps) {
    useEffect(() => {
        if (!visible) return;
        const timer = setTimeout(onClose, duration);
        return () => clearTimeout(timer);
    }, [visible, onClose, duration]);

    return (
        <div
            className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-lg bg-brand-red/85 text-white text-sm font-medium shadow-lg transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                }`}
        >
            {message}
        </div>
    );
}
