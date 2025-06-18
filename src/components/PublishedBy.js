import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetPublishedByForBook } from './Requests';

function PublishedBy() {
  const { publisherId } = useParams();
  const [publisher, setPublisher] = useState(null);

  useEffect(() => {
    const fetchPublisher = async () => {
      try {
        const data = await GetPublishedByForBook(publisherId);
        setPublisher(data);
      } catch (err) {
        console.error("Failed to fetch publisher", err);
      }
    };

    fetchPublisher();
  }, [publisherId]);

  if (!publisher) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Publisher Info</h1>
      <p><strong>Name:</strong> {publisher.name}</p>
      <p><strong>Contact:</strong> {publisher.contactNumber}</p>
      <p><strong>Email:</strong> {publisher.email}</p>
      <p><strong>Location:</strong> {publisher.location}</p>
    </div>
  );
}

export default PublishedBy;
