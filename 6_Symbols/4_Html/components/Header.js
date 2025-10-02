import React from 'react';
import contactInfo from '../data/contactinfo.json';

function Header() {
  const { contactInfo: info } = contactInfo;

  return (
    <header>
      <h1>Rifat Erdem Sahin</h1>
      <p>DevOps Engineer</p>
      <div className="contact-info">
        <p>Email: {info.email}</p>
        <p>Phone: {info.phone[0].number}</p>
        <p>Location: {info.address}</p>
        <p>LinkedIn: <a href={`https://${info.yourProfile.linkedin}`} target="_blank" rel="noopener noreferrer">{info.yourProfile.linkedin}</a></p>
      </div>
    </header>
  );
}

export default Header;
