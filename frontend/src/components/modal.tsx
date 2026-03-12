import { createPortal } from "react-dom"
import { useEffect } from "react"
import type { ReactNode } from "react"

type Props = {
    children: ReactNode
    onClose: () => void
}

export default function Modal({ children, onClose }: Props) {

    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [])

    return createPortal(
        <div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose()
            }}
        >
            <div className="bg-white rounded shadow-lg p-6 w-[500px] relative">

                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-black"
                >
                    ✕
                </button>

                {children}
            </div>
        </div>,
        document.body
    )
}