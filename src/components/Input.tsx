import React from 'react';

// 1. TypeScript icin Prop tiplerini tanimliyoruz
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helpText?: string;
}

export default function Input({
  label,
  type = 'text',
  error,
  helpText,
  id,
  className = '',
  ...props
}: InputProps) {
  return (
    <div className="space-y-1">
      
      {/* Etiket (Label) Kismi */}
      {label && (
        <label 
          htmlFor={id} 
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
        </label>
      )}

      {/* Input Kismi */}
      <input
        id={id}
        type={type}
        className={`w-full px-3 py-2 rounded-lg border transition-colors focus:outline-none focus:ring-2 dark:bg-gray-800 dark:text-gray-100 ${
          error
            ? 'border-red-500 focus:ring-red-500' /* Hata varsa kirmizi */
            : 'border-gray-300 focus:ring-blue-500' /* Normalde gri, tiklaninca mavi */
        } ${
          props.disabled
            ? 'bg-gray-100 cursor-not-allowed dark:bg-gray-700' /* Devre disiysa soluk */
            : 'bg-white dark:bg-gray-800'
        } ${className}`}
        // Ekran okuyucular icin aciklama baglantilari
        aria-describedby={
          error ? `${id}-error` : helpText ? `${id}-help` : undefined
        }
        {...props}
      />

      {/* Hata Mesaji Kismi */}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}

      {/* Yardimci Metin Kismi */}
      {helpText && !error && (
        <p id={`${id}-help`} className="text-sm text-gray-500 dark:text-gray-400">
          {helpText}
        </p>
      )}
      
    </div>
  );
}