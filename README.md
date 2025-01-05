# Email Core System

---

## Introduction

The Email Core System is a foundational service designed to manage and synchronize emails from Outlook accounts. It provides essential features such as OAuth-based authentication, email synchronization with Elasticsearch, and a simple frontend for monitoring and managing email data. This system is scalable, extensible, and built with best practices for high performance and maintainability.

---

## Features

1. **OAuth Authentication**
   - Securely connect to Outlook using Microsoft Graph API.
   - Supports access and refresh tokens for ongoing synchronization.

2. **Email Synchronization**
   - Initial synchronization of all emails and mailbox folders.
   - Real-time updates for email changes like read/unread status.
   - Efficient indexing using Elasticsearch for fast querying.

3. **Scalability**
   - Built to handle large datasets and multiple users.
   - Elasticsearch for distributed database storage.


---

## System Architecture

The system comprises three major components:

1. **Backend**
   - Developed with Node.js and Express.js.
   - Handles API endpoints for user authentication, synchronization, and email data retrieval.
   - Communicates with Elasticsearch for email storage and querying.

2. **Database**
   - Elasticsearch is used to store:
     - Email messages: Indexed for each user account.
     - Mailbox details: Folder structure and metadata for emails.

3. **Frontend**
   - Built with React.js for a simple and responsive UI.
   - Allows users to link accounts and monitor synchronization.

---

## Setup Guide

### Prerequisites

1. Node.js 
2. Elasticsearch
3. Docker and Docker Compose
4. Microsoft Azure account with access to Microsoft Graph API.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/email-core-system.git](https://github.com/shivaprasad-kulal/Email-engine-core-system.git
   cd email-core-system
   ```

2. Backend setup:
   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Configure environment variables:
     Create a `.env` file in the `backend` directory with the following:
     ```env
     CLIENT_ID=<your-microsoft-client-id>
     CLIENT_SECRET=<your-microsoft-client-secret>
     REDIRECT_URI=http://localhost:3000/api/oauth/callback
     ```
   - Start the backend:
     ```bash
     npm run dev
     ```

3. Frontend setup:
   - Navigate to the frontend directory:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the frontend:
     ```bash
     npm start
     ```

4. Elasticsearch setup:
   - Start Elasticsearch using Docker:
     ```bash
     docker run -p 9200:9200 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.17.3
     ```

5. Complete setup using Docker Compose:
   - From the project root:
     ```bash
     docker-compose up
     ```

---

## Case Study: Synchronizing Outlook Emails

### Scenario:

A user named shivani wants to manage her Outlook emails efficiently using the Email Core System. She needs real-time synchronization and a local index of her email data for quick search capabilities.

### Steps:

1. **Account Linking:**
   - shivani logs into the frontend and clicks the "Link your Outlook Account" button.
   - She is redirected to Microsoft’s OAuth consent screen.
   - After granting permissions, she is redirected back to the system.

2. **Email Synchronization:**
   - The backend exchanges the authorization code for access and refresh tokens.
   - Using the Microsoft Graph API, the system fetches Shivani's emails and mailbox structure.
   - The emails are indexed into Elasticsearch under a unique index.

3. **Real-Time Updates:**
   - Shivani marks an email as "read" in her Outlook inbox.
   - Microsoft Graph API sends a webhook notification to the backend.
   - The backend fetches the updated email status and updates Elasticsearch.

4. **User Interface:**
   - Shivani sees the progress of the synchronization process on the frontend.
   - Once synchronization completes, she can view her emails listed with subject lines and sender names.
   - Subsequent updates (e.g., new emails or status changes) are reflected in real time.

---

## Conclusion

The Email Core System demonstrates a robust, scalable, and extensible solution for managing email data. By leveraging modern technologies like Elasticsearch and Microsoft Graph API, the system provides an efficient way to handle real-time synchronization and user interactions. This architecture can be a solid foundation for a full-fledged email client with multi-provider support in the future.

---
