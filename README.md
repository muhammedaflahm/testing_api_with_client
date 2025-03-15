# **Assignment Elaboration: API Testing and Database Integration**

You are a developer for an educational analytics platform that helps teachers evaluate students' performance. The platform maintains student records, including their names, grades, and marks in multiple subjects, stored in a JSON format.

# **Retrieve Students Above Threshold API**

The platform's backend provides an API that allows teachers to retrieve the list of students whose total marks exceed a specified threshold.

## **Student Data Format**
Each student's data includes the following fields:

```json
{
    "student_id": "1",
    "name": "Alice Johnson",
    "marks": {
        "math": 85,
        "science": 90,
        "english": 78,
        "history": 88,
        "geography": 92
    },
    "total": 433
}
```

- **`total`**: Represents the sum of marks across all subjects for that student.

## **API Functionality**
Teachers can input a number (threshold), and the API will return a list containing:
- Names of students
- Their corresponding total marks

### **Example Use Case**
If a teacher inputs `400` as the threshold, the API will return all students whose total marks are greater than `400`.

# Students Above Threshold API

## **Problem Statement**
The task is to implement and test an API that:
1. Accepts a **threshold** number in the API request.
2. Processes JSON data of 100 students to filter records based on the `total` field.
3. Returns the names and total marks of students whose total marks exceed the specified threshold.

---

## **API Requirements**

### **Endpoint**
`POST /students/above-threshold`

### **Request Body**
The request must contain the following field:
- **`threshold`**: A number specifying the minimum total marks.

#### **Example Request**
```json
{
    "threshold": 400
}

Make sure that the input was clearly validated and is and valid input for the question.

## **Response Format**

### **Success Response**
The response includes:
- **`count`**: Number of students meeting the threshold criteria.
- **`students`**: A list of objects containing:
  - **`name`**: Name of the student.
  - **`total`**: Total marks of the student.

#### Example Response:
```json
{
    "count": 3,
    "students": [
        {"name": "Alice Johnson", "total": 433},
        {"name": "Bob Smith", "total": 410},
        {"name": "Charlie Davis", "total": 415}
    ]
}
```

---

### **No Matching Records**
If no students meet the threshold criteria, the API returns an empty list with a count of `0`.

#### Example Response:
```json
{
    "count": 0,
    "students": []
}
```


# **How to Fork and Set Up Your Repository**

---

## **1. Fork the Repository on StackBlitz**
- You will be provided with a **StackBlitz** link for the assignment.
- Open the link in your browser and click on the **Fork** button in StackBlitz.  
  This will create a copy of the repository in your StackBlitz account.

---

## **2. Clone the Repository to Your Personal GitHub**
- After forking, you can download the project or push it directly to your personal GitHub repository:
  - **Option 1: Download and Push**
    1. Download the repository files from StackBlitz.
    2. Open your terminal/command prompt, navigate to the project folder, and run:
       ```bash
       git init
       git remote add origin <your_github_repo_url>
       ```
       Replace `<your_github_repo_url>` with your personal GitHub repository URL.
    3. Commit and push the files to your GitHub repository:
       ```bash
       git add .
       git commit -m "Completed the assignment"
       git push -u origin main
       ```
  - **Option 2: Push Directly**
    1. Use the **Push to GitHub** option in StackBlitz to directly connect and push the repository to your GitHub account.

---

## **3. Submission Instructions**
- Once your code is successfully pushed to GitHub:
  1. Copy the link to your GitHub repository.
  2. Submit the link on the assignment submission portal.  
     The link should follow this format:  
     **`https://github.com/<your_username>/<repository_name>`**

---

### **Example Submission**
If your GitHub username is `johnDoe` and the repository name is `assignment-repo`, the submission link would look like this:  
**`https://github.com/johnDoe/assignment-repo`**
