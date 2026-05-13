import React, { useState, useEffect } from 'react';
import './DebouncedSearchBar.css';

/**
 * DebouncedSearchBar Component
 * 
 * A search bar that implements debouncing to optimize API calls.
 * The API is only called after the user stops typing for a specified delay.
 * 
 * Features:
 * - Debounced search input (500ms delay)
 * - Loading state indicator
 * - Display search results
 * - Clear search functionality
 */
const DebouncedSearchBar = () => {
  // State to store the current input value
  const [searchTerm, setSearchTerm] = useState('');
  
  // State to store the debounced value (value after delay)
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  
  // State to store API results
  const [results, setResults] = useState([]);
  
  // State to track loading status
  const [isLoading, setIsLoading] = useState(false);
  
  // State to store any error messages
  const [error, setError] = useState(null);

  /**
   * useEffect Hook for Debouncing
   * 
   * This effect implements the debounce logic:
   * 1. Sets a timer when searchTerm changes
   * 2. If user types again before timer expires, the previous timer is cleared
   * 3. Only after user stops typing for 500ms, the debouncedSearchTerm is updated
   * 4. Cleanup function clears the timer when component unmounts or searchTerm changes
   */
  useEffect(() => {
    // Set a timer to update debouncedSearchTerm after 500ms
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500); // 500ms delay

    // Cleanup function: Clear the timer if searchTerm changes before 500ms
    // This prevents unnecessary API calls while user is still typing
    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]); // Re-run effect whenever searchTerm changes

  /**
   * useEffect Hook for API Call
   * 
   * This effect triggers the API call when debouncedSearchTerm changes:
   * 1. Only makes API call after debounce delay has passed
   * 2. Skips API call if search term is empty
   * 3. Handles loading states and errors
   */
  useEffect(() => {
    // Don't make API call if search term is empty
    if (!debouncedSearchTerm.trim()) {
      setResults([]);
      return;
    }

    // Function to fetch search results from API
    const fetchSearchResults = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Simulated API call using JSONPlaceholder
        // In real application, replace with your actual API endpoint
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?name_like=${debouncedSearchTerm}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch results');
        }

        const data = await response.json();
        
        // Set the results from API
        setResults(data);
      } catch (err) {
        // Handle any errors during API call
        setError(err.message);
        setResults([]);
      } finally {
        // Always set loading to false after API call completes
        setIsLoading(false);
      }
    };

    // Execute the API call
    fetchSearchResults();
  }, [debouncedSearchTerm]); // Re-run when debouncedSearchTerm changes

  /**
   * Handle input change
   * Updates the searchTerm state immediately as user types
   */
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  /**
   * Clear search
   * Resets all states to initial values
   */
  const handleClearSearch = () => {
    setSearchTerm('');
    setDebouncedSearchTerm('');
    setResults([]);
    setError(null);
  };

  return (
    <div className="debounced-search-container">
      <h1>Debounced Search Bar</h1>
      
      {/* Search Input Section */}
      <div className="search-input-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder="Search users... (try typing 'Leanne' or 'Ervin')"
          value={searchTerm}
          onChange={handleInputChange}
        />
        
        {/* Clear button - only show when there's text */}
        {searchTerm && (
          <button 
            className="clear-button"
            onClick={handleClearSearch}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>

      {/* Info text showing debounce status */}
      <div className="search-info">
        {searchTerm && searchTerm !== debouncedSearchTerm && (
          <p className="typing-indicator">Waiting for you to stop typing...</p>
        )}
        {debouncedSearchTerm && (
          <p className="search-query">Searching for: "{debouncedSearchTerm}"</p>
        )}
      </div>

      {/* Loading Indicator */}
      {isLoading && (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading results...</p>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="error-message">
          <p>Error: {error}</p>
        </div>
      )}

      {/* Search Results */}
      {!isLoading && !error && results.length > 0 && (
        <div className="results-container">
          <h2>Search Results ({results.length})</h2>
          <ul className="results-list">
            {results.map((user) => (
              <li key={user.id} className="result-item">
                <div className="result-header">
                  <h3>{user.name}</h3>
                  <span className="username">@{user.username}</span>
                </div>
                <p className="email">{user.email}</p>
                <p className="website">{user.website}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* No Results Message */}
      {!isLoading && !error && debouncedSearchTerm && results.length === 0 && (
        <div className="no-results">
          <p>No results found for "{debouncedSearchTerm}"</p>
        </div>
      )}

      {/* Instructions */}
      <div className="instructions">
        <h3>How it works:</h3>
        <ul>
          <li>Type in the search box above</li>
          <li>The API call is delayed by 500ms after you stop typing</li>
          <li>This prevents excessive API calls while you're still typing</li>
          <li>Watch the "Waiting for you to stop typing..." message</li>
          <li>Try typing quickly and then pausing to see the debounce in action</li>
        </ul>
      </div>
    </div>
  );
};

export default DebouncedSearchBar;
