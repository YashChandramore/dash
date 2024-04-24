import React from 'react';
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

const Header = () => {
  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  }

  return (
    <header className="bg-blue-600 dark:bg-blue-900 py-4 px-6 flex justify-between items-center">
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/008/214/517/small/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg"
        alt="company_logo"
        className="w-12 h-12 mr-2 cursor-pointer rounded-full"
      />
      <div className="text-2xl font-bold text-white italic">FleetRun</div>

      <div className="flex-1 mx-8 flex justify-center relative">
        <input
          type="text"
          placeholder="Search"
          className="w-full py-2 px-4 pr-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <span className="text-gray-400 cursor-pointer"> 🔍</span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAZlBMVEX///8AAADd3d1YWFg1NTX7+/uWlpZlZWWKior39/dcXFyQkJDx8fG5ubns7Oy9vb3l5eWkpKSEhIQ9PT1wcHArKyswMDAmJibU1NSysrIWFhbIyMgQEBB4eHjOzs4dHR1HR0dOTk61faplAAAENElEQVR4nO2dCZaiMBBADYoNighou2Kr97/kmGGcZ7dAElJL6Ff/AuY/SVVln0ywOKgODmg/iUZed8nUOXfbnFl2uSi15G6bK3m3i1Jj+2uSPpmEu3WO7Ptk9tytcyPqc1Eq4m6fE2W/TMndPid6YplmXPHs0i9z4W6fE4t+mQV3+5wQmVARmVD5VTIf/TIf3O1zICp7S7NHcVaOpKD5qjbXzoHZk/q6qb64W2oiqkwar1Th/j9xtrq5qGhuqyzmbncLcVFeXVU017IITicqN0NUNJvAokFe3oeqaO5lQLMCq62Pima74nb4R5F8+roo9ZkU3B6a9dRfRTNdc5tMJnNDsrdnP2dWyb17yytb1jhwcM6S/dwYJ9W/drAuSu3YCrYztIrmzOOyxnBRiiWoIbmw2KzBQvJP9uQ258F1pZkNcb853PFcHoUnaYSGzZXvUGbP2DDJ78+SbsB2xHZR6kjlcpjhy8yIuk2G3GEathmJDMFHpiH50Arw6rKdHcXQk+Qj02zxXVBK5XbwCwHEMuYnG2yXFZ2LUtjzT0S9v2GH61KeKGVOqDs50july6N8ThFljmgjsnb2iJkzJssxT7Z41TPm8LIdxEEn+jDmHbT9T5FhdR+DBdZC1Io0LjeckBJnPKd3UWqOEwIioIUYN6Y43xnaFGY/KFOCKctX9vjOMKqAwrC5B4sPjBHngSGWaU4Y8zRMXQal06QM6b9hCd9pMpbArJnCz6AVxj1kWNTwEaDz1BU+8BGAdCbjO+DlWey0xQ+WCro8ixnK/ycLaJmUrf8/IgB0bE75XJQSmR4YIzN8bGaMzPCx2XAiDhfoWVqmkVkD9BbB3hOx2ECfuCWfmH0FekGQaczcAH3chm00o5kCywDvLHXjBixDPv//CvRKLcF2mW5mIiMyIiMyIiMyIiMyIiMyIiMyIiMyIiMyIiMyIiMyIiMyIiMyIiMyIiMyIiMyIiMyIiMyIiMyIiMyIiMy/wG4+Hc4n6AqKeMhLU0FeOgkY908r0nAzmrm7C4PG6ArD/OE8bzZkxrGJk+Yjpt/5wRhk4Xhom28+00aQH95kvjGtIBcfA8FxYYnvqi5eJylDc3Fx4Y777cxtBbgz/ttDItpIeT9Nobkm0By5TsDsmewLgNsshDqsS5qt34TYhx7xSWmcV6YYYf9tRrh5cp3bLNn6N9Yg+WXxnYpkxt29zgyXsrigt3Lj6wHzO2xO4ouMvSITKiITKjYyfyqPFNNR0FlJVNEoyCIVx4FQRAEwYfYGu6WmsmOc0uONC+Z+VBY16mL8AuS3HoG8RLQA+cd2C9RwW0hQSO2vj60HEEEsL5yP4C3zY3YvuhK+zbrQGz3dHjvtyDB7s0drFdygLELziMIzH9ZW7y5txtD99fYrLz57IKhJTJuHJ5hPZKFwNmw8F4TPwDuh+HRXaQn//4ATy5qo9vWLpwAAAAASUVORK5CYII="
            alt="notification_logo"
            className="w-8 h-8 m-2 cursor-pointer"
          />
          <span className="cursor:pointer absolute top-0 right-0 bg-red-500 text-white rounded-full px-1 text-xs">3</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`${dark ? 'text-white' : 'text-white'}`}>Rohit</span>
          <img
            src="https://via.placeholder.com/32"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <button
            className={`bg-yellow-400 p-2 rounded-full focus:outline-none ${dark ? 'text-gray-800' : 'text-white'}`}
            onClick={darkModeHandler}
          >
            {dark ? <IoSunny className="w-6 h-6" /> : <IoMoon className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
