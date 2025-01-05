import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmailList = () => {
    const [emails, setEmails] = useState([]);

    const fetchEmails = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/emails/12345'); // Replace with dynamic user ID
            setEmails(response.data.emails);
        } catch (error) {
            console.error('Error fetching emails:', error);
        }
    };

    useEffect(() => {
        fetchEmails();
    }, []);

    return (
        <div>
            <h2>Your Emails</h2>
            <ul>
                {emails.map((email) => (
                    <li key={email.id}>
                        <strong>{email.subject}</strong><br />
                        From: {email.sender}<br />
                        {email.read ? 'Read' : 'Unread'}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmailList;
