// Custom SVG Icons Component
export const Icons = {
  Phone: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  ),

  Email: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  ),

  Location: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
    </svg>
  ),

  Clock: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
        clipRule="evenodd"
      />
    </svg>
  ),

  Users: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
    </svg>
  ),

  Trophy: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 2L7.5 7H2l4.5 3.5L5 16l5-3 5 3-1.5-5.5L18 7h-5.5L10 2z" clipRule="evenodd" />
    </svg>
  ),

  Heart: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
        clipRule="evenodd"
      />
    </svg>
  ),

  Shield: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  ),

  // Medical Icons
  Stethoscope: ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
      <path d="M17.83 12.5c.31-.83.17-1.78-.42-2.48-.6-.7-1.5-1.02-2.41-.85V7c0-2.21-1.79-4-4-4S7 4.79 7 7v2.17c-.91-.17-1.81.15-2.41.85-.59.7-.73 1.65-.42 2.48L5 14.5c.5 1.5 1.91 2.5 3.5 2.5s3-1 3.5-2.5l.83-2zm-6.33 2c-.28.83-.94 1.5-1.83 1.5s-1.55-.67-1.83-1.5L7 12.5c-.17-.5-.08-1.08.25-1.5.33-.42.83-.67 1.33-.67.17 0 .33.03.5.08L9 7c0-1.1.9-2 2-2s2 .9 2 2v3.41c.17-.05.33-.08.5-.08.5 0 1 .25 1.33.67.33.42.42 1 .25 1.5l-.83 2.5z" />
    </svg>
  ),

  Bone: ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M15.5 2.5c1.38 0 2.5 1.12 2.5 2.5 0 .55-.18 1.05-.48 1.46L20 8.94c.83-.83 2.17-.83 3 0s.83 2.17 0 3L20.52 14.42c.3.41.48.91.48 1.46 0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5c0-.55.18-1.05.48-1.46L13.5 12l2.98-2.42c-.3-.41-.48-.91-.48-1.46 0-1.38 1.12-2.5 2.5-2.5zm-7 0c1.38 0 2.5 1.12 2.5 2.5 0 .55-.18 1.05-.48 1.46L13.5 8.94c.83-.83 2.17-.83 3 0s.83 2.17 0 3L13.52 14.42c.3.41.48.91.48 1.46 0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5c0-.55.18-1.05.48-1.46L6.5 12l2.98-2.42c-.3-.41-.48-.91-.48-1.46 0-1.38 1.12-2.5 2.5-2.5z" />
    </svg>
  ),

  Brain: ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M21.33 12.91c.09-.09.15-.2.15-.33 0-.12-.06-.23-.15-.32-.09-.09-.2-.15-.33-.15-.12 0-.23.06-.32.15l-1.5 1.5c-.09.09-.15.2-.15.33 0 .12.06.23.15.32.09.09.2.15.32.15.13 0 .24-.06.33-.15l1.5-1.5zm-18.66 0c.09.09.2.15.33.15.12 0 .23-.06.32-.15.09-.09.15-.2.15-.32 0-.13-.06-.24-.15-.33l-1.5-1.5c-.09-.09-.2-.15-.32-.15-.13 0-.24.06-.33.15-.09.09-.15.2-.15.32 0 .13.06.24.15.33l1.5 1.5z" />
      <path d="M12 2C8.69 2 6 4.69 6 8c0 1.89.88 3.57 2.25 4.66C7.5 13.5 7 14.69 7 16c0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.31-.5-2.5-1.25-3.34C17.12 11.57 18 9.89 18 8c0-3.31-2.69-6-6-6zm0 2c2.21 0 4 1.79 4 4 0 1.48-.81 2.75-2 3.45V16c0 1.66-1.34 3-3 3s-3-1.34-3-3v-4.55C6.81 10.75 6 9.48 6 8c0-2.21 1.79-4 4-4z" />
    </svg>
  ),

  Lungs: ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2v20M8 4c-2.21 0-4 1.79-4 4v8c0 2.21 1.79 4 4 4h1V4H8zm8 0h-1v16h1c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4z" />
    </svg>
  ),

  // Service Icons
  Bed: ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M21 10.78V8c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78-.53-.48-1.23-.78-2-.78H6c-1.65 0-3 1.35-3 3v2.78c-.61.55-1 1.34-1 2.22v6h2v-2h16v2h2v-6c0-.88-.39-1.67-1-2.22zM14 7h4c.55 0 1 .45 1 1v2h-6V8c0-.55.45-1 1-1zM5 8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2H5V8zm-2 5h18v2H3v-2z" />
    </svg>
  ),

  Microscope: ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M9.5 12H8v6h8v-1.5h-2.5v-2h1.1l.9 1.5h2.5l-1.5-2.5c.6-.3 1-1 1-1.8V9.5c0-1.1-.9-2-2-2h-3c-1.1 0-2 .9-2 2V12zm1.5-2.5c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v1.8c0 .3-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5V9.5z" />
      <path d="M12 1L8 5v4h8V5l-4-4zm0 2.5L13.5 5h-3L12 3.5z" />
    </svg>
  ),

  XRay: ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 4H2v16h20V4zm-2 14H4V6h16v12z" />
      <path d="M8 8h8v8H8z" />
    </svg>
  ),

  Syringe: ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.5 6.5L5 8l1.5 1.5L8 8l1.5 1.5L11 8l1.5 1.5L14 8l1.5 1.5L17 8l-1.5-1.5L14 8l-1.5-1.5L11 8 9.5 6.5 8 8 6.5 6.5z" />
      <path d="M19.5 3.5L16 7l-1.5-1.5-1.5 1.5L15.5 9 12 12.5l-1.5-1.5L9 12.5l1.5 1.5L7 17.5c-.83.83-.83 2.17 0 3s2.17.83 3 0L13.5 17l1.5 1.5L16.5 17 15 15.5 18.5 12l1.5 1.5L21.5 12 20 10.5l1.5-1.5-1.5-1.5L18.5 9 22 5.5 19.5 3.5z" />
    </svg>
  ),

  ChevronLeft: ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  ),

  ChevronRight: ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  ),

  Star: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ),

  Menu: ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clipRule="evenodd"
      />
    </svg>
  ),

  X: ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  ),

  ArrowRight: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  ),
}
