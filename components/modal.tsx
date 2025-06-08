
"use client"

import { ReactNode, useCallback, useEffect, useRef, useState } from "react"

import { QRCode } from "./qrcode"

// TypeScript interfaces for props
interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  title?: string
  subtitle?: string
}

interface ModalButtonProps {
  onClick: () => void
  children?: ReactNode // Making children optional
  className?: string
}

// Reusable Modal Component
export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  subtitle,
}) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEsc)

    // Prevent background scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    // Focus management
    if (isOpen && modalRef.current) {
      const firstFocusableElement = modalRef.current.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      firstFocusableElement?.focus()
    }

    return () => {
      document.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Background Overlay */}
      <div
        className="fixed inset-0 bg-black opacity-75 transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true" // for screen readers
      ></div>

      {/* Modal Content */}
      <div
        className="relative z-10 w-full max-w-md mx-auto bg-white rounded-xl shadow-2xl transition-all duration-300 p-6"
        ref={modalRef}
        aria-modal="true"
        role="dialog"
      >
        {title && (
          <div className="mb-4 w-full text-center">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
          </div>
        )}

        {/* Modal Content */}
        <div className="w-full">{children}</div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-6 rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
        >
          Close
        </button>
      </div>
    </div>
  )
}

// Button that opens a modal
export const ModalButton: React.FC<ModalButtonProps> = ({ onClick }) => {
  return (
    <button
      className={`size-[34px] rounded border border-gray-800 bg-gray-200 p-1.5 dark:border-gray-200 dark:bg-gray-900`}
      aria-label="Show QR Code"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-gray-900 dark:text-gray-100"
      >
        {/* QR Code SVG icon */}
        <path
          fillRule="evenodd"
          d="M3 4a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 1v3h3V5H5zm8-1a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1h-5a1 1 0 01-1-1V4zm2 1v3h3V5h-3zm-8 8a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1H4a1 1 0 01-1-1v-5zm2 1v3h3v-3H5zm13-1a1 1 0 00-1 1v2h-2a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2v-2a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  )
}

// Demo component
interface ModalDemoProps {}

export const ModalDemo: React.FC<ModalDemoProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const openModal = useCallback(() => setIsModalOpen(true), [])
  const closeModal = useCallback(() => setIsModalOpen(false), [])

  return (
    <div>
      <ModalButton onClick={openModal}>Connect</ModalButton>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Connect On LinkedIn"
        subtitle=""
      >
        <div className="text-center">
          <QRCode />
        </div>
      </Modal>
    </div>
  )
}

export default ModalDemo
