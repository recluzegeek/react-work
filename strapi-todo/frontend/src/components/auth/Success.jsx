import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Success() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate(); 

  useEffect(() => {
    const accessToken = searchParams.get('access_token');

    const redirectToCallback = async () => {
      if (accessToken) {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_REACT_APP_BACKEND}/api/auth/google/callback?access_token=${accessToken}`
          );

          // console.log(response);

          if (response.ok) {
            const data = await response.json();
            // console.log(data);
            navigate('/to-dos');
          } else {
            console.error('Failed to fetch data from the callback URL');
          }
        } catch (error) {
          console.error('Error while fetching data:', error);
        }
      } else {
        console.error('Access token not found in URL parameters');
      }
    };

    redirectToCallback();
  }, [searchParams, navigate]);

  return <div>Authentication Successful. Redirecting to Homepage</div>;
}
