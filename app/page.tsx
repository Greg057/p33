'use client';

// 🎯 PORTFOLIO PAGE USING ACTUAL PORTFOLIOLAYOUT SYSTEM
// This ensures 100% visual parity with the SaaS version
import PortfolioLayout from '@/components/PortfolioLayout'

// User data embedded at build time (no server-side dependencies)
// NOTE: File URLs include GitHub Pages basePath (e.g., /repo-name/user-files/...)
const userData = {
  "userInfo": {
    "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
    "full_name": "Jane Doe",
    "title": "Software Engineer",
    "email": "jane.doe@email.com",
    "about_me": "Software Engineer at TechWave Solutions specializing in scalable web applications, cloud platforms, and Agile methodologies. Passionate about building user-friendly solutions and continuously learning emerging technologies such as artificial intelligence, machine learning, and cloud-native applications. Experienced in Java, Python, JavaScript, and cloud DevOps tools.",
    "location": "San Francisco, CA",
    "avatarUrl": null,
    "cvUrl": "/p33/user-files/d42bc912-a6d3-4955-8d60-dcfd564b1cb9/cv.pdf",
    "custom_links": [
      {
        "id": "linkedin",
        "url": "https://linkedin.com/in/janedoe",
        "icon": "linkedin",
        "title": "LinkedIn"
      },
      {
        "id": "github",
        "url": "https://github.com/janedoe",
        "icon": "github",
        "title": "GitHub"
      }
    ]
  },
  "educations": [
    {
      "id": "c86bb5a7-3792-4c7e-97f3-ccae786e79e1",
      "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
      "degree": "Bachelor of Computer Science",
      "university": "University of California, Berkeley",
      "start_year": "2015",
      "end_year": "2019",
      "description": "Relevant Coursework:\nData Structures, Algorithms, Operating Systems, Databases, Machine Learning, Software Engineering.",
      "logoUrl": null,
      "order_index": 0,
      "custom_links": [],
      "location": "Berkeley, CA"
    }
  ],
  "experiences": [
    {
      "id": "0a0dd2b8-1d11-4f3f-bb32-921bf530a98a",
      "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
      "company": "TechWave Solutions",
      "position": "Software Engineer",
      "start_date": "Jan 2021",
      "end_date": "Present",
      "description": "- Designed and developed scalable microservices in Java and Node.js, reducing system downtime by 30%.\n- Implemented CI/CD pipelines with GitHub Actions and Docker, improving deployment speed by 40%.\n- Optimized database queries in PostgreSQL, cutting average response time by 25%.\n- Collaborated with a team of 8 engineers using Agile, consistently delivering features within sprint deadlines.\n- Mentored junior developers, leading to faster onboarding and reduced code review issues.",
      "logoUrl": null,
      "order_index": 0,
      "custom_links": [],
      "location": "San Francisco, CA"
    },
    {
      "id": "3f07a40a-0bca-45ea-a4eb-ea4373d22096",
      "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
      "company": "BrightApps Inc.",
      "position": "Junior Software Engineer",
      "start_date": "Jun 2019",
      "end_date": "Dec 2020",
      "description": "- Built front-end features with React and integrated REST APIs for an e-commerce platform serving 50k+ users.\n- Wrote unit and integration tests, increasing code coverage from 60% to 85%.\n- Supported migration of legacy PHP application to Node.js, improving maintainability.\n- Partnered with UX designers to enhance customer checkout flow, resulting in 15% increase in conversions.\n- Automated deployment scripts with Jenkins, cutting manual release steps by 70%.",
      "logoUrl": null,
      "order_index": 1,
      "custom_links": [],
      "location": "San Jose, CA"
    }
  ],
  "projects": [
    {
      "id": "92e78150-339f-46e4-9446-4934613ba492",
      "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
      "name": "Portfolio Builder Web App",
      "description": "- Developed a customizable portfolio generator using Next.js and Supabase.\n- Implemented user authentication, template themes, and image upload features.\n- Deployed application on Vercel with continuous integration.",
      "picUrl": null,
      "order_index": 0,
      "technology_names": [
        "Next.js",
        "Supabase",
        "Vercel"
      ],
      "technology_details": [],
      "custom_links": [],
      "technologyNames": [
        "Next.js",
        "Supabase",
        "Vercel"
      ],
      "technologyDetails": []
    },
    {
      "id": "b047353b-e59c-423a-970c-b8ca01a56a50",
      "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
      "name": "Movie Recommendation System",
      "description": "- Built a Python-based ML model using scikit-learn to recommend movies with 82% accuracy.\n- Deployed the model as a Flask API and integrated it into a React front end.\n- Conducted A/B testing with 200+ users, improving recommendation relevance by 18%.",
      "picUrl": null,
      "order_index": 1,
      "technology_names": [
        "Python",
        "scikit-learn",
        "Flask",
        "React"
      ],
      "technology_details": [],
      "custom_links": [],
      "technologyNames": [
        "Python",
        "scikit-learn",
        "Flask",
        "React"
      ],
      "technologyDetails": []
    },
    {
      "id": "b7ae30d4-1b2f-44e9-9035-77d30dd925b0",
      "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
      "name": "Task Manager Mobile App",
      "description": "- Created a cross-platform mobile app using React Native for task tracking.\n- Integrated push notifications and offline storage using SQLite.\n- Achieved 1,000+ downloads with positive feedback on UI/UX.",
      "picUrl": null,
      "order_index": 2,
      "technology_names": [
        "React Native",
        "SQLite"
      ],
      "technology_details": [],
      "custom_links": [],
      "technologyNames": [
        "React Native",
        "SQLite"
      ],
      "technologyDetails": []
    }
  ],
  "userTechnologies": [
    {
      "id": "9d3978e3-10a9-4bac-88be-7b8e392b010b",
      "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
      "display_name": "Java",
      "technology_name": "Java",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 0,
      "created_at": "2025-09-14T02:47:02.811+00:00",
      "updated_at": "2025-09-14T02:47:02.811+00:00"
    },
    {
      "id": "9f32df84-a598-4cf7-8ded-c75e828cb67f",
      "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
      "display_name": "Python",
      "technology_name": "Python",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 1,
      "created_at": "2025-09-14T02:47:02.811+00:00",
      "updated_at": "2025-09-14T02:47:02.811+00:00"
    },
    {
      "id": "989825e0-5b05-4849-81a1-cd8989e79bd5",
      "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
      "display_name": "JavaScript",
      "technology_name": "JavaScript",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 2,
      "created_at": "2025-09-14T02:47:02.811+00:00",
      "updated_at": "2025-09-14T02:47:02.811+00:00"
    },
    {
      "id": "be6df93f-1fb7-4e57-82c4-73f48d260ae6",
      "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
      "display_name": "React",
      "technology_name": "React",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 3,
      "created_at": "2025-09-14T02:47:02.811+00:00",
      "updated_at": "2025-09-14T02:47:02.811+00:00"
    },
    {
      "id": "57f1a963-48fe-41bc-9343-71668dd3ecdd",
      "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
      "display_name": "Node.js",
      "technology_name": "Node.js",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 4,
      "created_at": "2025-09-14T02:47:02.811+00:00",
      "updated_at": "2025-09-14T02:47:02.811+00:00"
    },
    {
      "id": "35934a59-3d91-466f-8fbc-d28d9b1ddf79",
      "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
      "display_name": "TypeScript",
      "technology_name": "TypeScript",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 5,
      "created_at": "2025-09-14T02:47:02.811+00:00",
      "updated_at": "2025-09-14T02:47:02.811+00:00"
    },
    {
      "id": "3091da82-a263-4e8e-9312-7d93ddc5c7ee",
      "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
      "display_name": "C++",
      "technology_name": "C++",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 6,
      "created_at": "2025-09-14T02:47:02.811+00:00",
      "updated_at": "2025-09-14T02:47:02.811+00:00"
    },
    {
      "id": "34488fa7-8f94-4af8-ab75-b4b5a3fb0e4d",
      "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
      "display_name": "Next.js",
      "technology_name": "Next.js",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 7,
      "created_at": "2025-09-14T02:47:02.811+00:00",
      "updated_at": "2025-09-14T02:47:02.811+00:00"
    },
    {
      "id": "d86ab951-e666-415a-be00-9ba2e54bb5a2",
      "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
      "display_name": "Spring Boot",
      "technology_name": "Spring Boot",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 8,
      "created_at": "2025-09-14T02:47:02.811+00:00",
      "updated_at": "2025-09-14T02:47:02.811+00:00"
    },
    {
      "id": "2ce06e83-a16b-4b9e-8e1a-c422d897c47a",
      "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
      "display_name": "Express.js",
      "technology_name": "Express.js",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 9,
      "created_at": "2025-09-14T02:47:02.811+00:00",
      "updated_at": "2025-09-14T02:47:02.811+00:00"
    },
    {
      "id": "10b4a32c-ca74-48a1-948b-1f89ee0b16b9",
      "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
      "display_name": "Django",
      "technology_name": "Django",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 10,
      "created_at": "2025-09-14T02:47:02.811+00:00",
      "updated_at": "2025-09-14T02:47:02.811+00:00"
    },
    {
      "id": "f55e0ec1-fd33-4829-95ad-e1285f83014f",
      "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
      "display_name": "PostgreSQL",
      "technology_name": "PostgreSQL",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 11,
      "created_at": "2025-09-14T02:47:02.811+00:00",
      "updated_at": "2025-09-14T02:47:02.811+00:00"
    },
    {
      "id": "f1b962e4-68ad-4105-961f-1cba1b0d5f8c",
      "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
      "display_name": "MongoDB",
      "technology_name": "MongoDB",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 12,
      "created_at": "2025-09-14T02:47:02.811+00:00",
      "updated_at": "2025-09-14T02:47:02.811+00:00"
    },
    {
      "id": "8b2123de-2e39-4ec6-9aa4-670e2bde7971",
      "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
      "display_name": "MySQL",
      "technology_name": "MySQL",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 13,
      "created_at": "2025-09-14T02:47:02.811+00:00",
      "updated_at": "2025-09-14T02:47:02.811+00:00"
    },
    {
      "id": "9aa8b14d-6baf-47a0-8514-c2ecd9148104",
      "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
      "display_name": "Redis",
      "technology_name": "Redis",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 14,
      "created_at": "2025-09-14T02:47:02.811+00:00",
      "updated_at": "2025-09-14T02:47:02.811+00:00"
    },
    {
      "id": "803f8553-e094-488c-9a82-d85c649b093d",
      "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
      "display_name": "AWS",
      "technology_name": "AWS",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 15,
      "created_at": "2025-09-14T02:47:02.811+00:00",
      "updated_at": "2025-09-14T02:47:02.811+00:00"
    },
    {
      "id": "6ad3a9ee-ee51-442f-a13d-7399150496fe",
      "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
      "display_name": "Docker",
      "technology_name": "Docker",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 16,
      "created_at": "2025-09-14T02:47:02.811+00:00",
      "updated_at": "2025-09-14T02:47:02.811+00:00"
    },
    {
      "id": "04b739dc-3948-417b-9e2b-5bfbd53c7574",
      "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
      "display_name": "Kubernetes",
      "technology_name": "Kubernetes",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 17,
      "created_at": "2025-09-14T02:47:02.811+00:00",
      "updated_at": "2025-09-14T02:47:02.811+00:00"
    },
    {
      "id": "4582282d-9350-4537-9ca6-0d38acb35779",
      "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
      "display_name": "Git",
      "technology_name": "Git",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 18,
      "created_at": "2025-09-14T02:47:02.811+00:00",
      "updated_at": "2025-09-14T02:47:02.811+00:00"
    },
    {
      "id": "9bdf8d08-bd2c-4156-8801-f04f3caa102e",
      "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
      "display_name": "Jenkins",
      "technology_name": "Jenkins",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 19,
      "created_at": "2025-09-14T02:47:02.811+00:00",
      "updated_at": "2025-09-14T02:47:02.811+00:00"
    },
    {
      "id": "85d1bf35-24e8-4a40-8fa8-3e9c949f1a6b",
      "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
      "display_name": "CI/CD pipelines",
      "technology_name": "CI/CD pipelines",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 20,
      "created_at": "2025-09-14T02:47:02.811+00:00",
      "updated_at": "2025-09-14T02:47:02.811+00:00"
    },
    {
      "id": "b7ceaa13-6ee2-4fc6-b6c6-1719d0362ff0",
      "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
      "display_name": "REST APIs",
      "technology_name": "REST APIs",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 21,
      "created_at": "2025-09-14T02:47:02.811+00:00",
      "updated_at": "2025-09-14T02:47:02.811+00:00"
    },
    {
      "id": "2ca7d788-f175-470d-a9d6-2b5d19d9af57",
      "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
      "display_name": "GraphQL",
      "technology_name": "GraphQL",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 22,
      "created_at": "2025-09-14T02:47:02.811+00:00",
      "updated_at": "2025-09-14T02:47:02.811+00:00"
    },
    {
      "id": "1cb64222-e35c-4a44-88fc-0c005e8078b5",
      "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
      "display_name": "Unit Testing",
      "technology_name": "Unit Testing",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 23,
      "created_at": "2025-09-14T02:47:02.811+00:00",
      "updated_at": "2025-09-14T02:47:02.811+00:00"
    },
    {
      "id": "d8f68c77-5846-4ab2-a707-38b60948aebf",
      "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
      "display_name": "Agile/Scrum",
      "technology_name": "Agile/Scrum",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 24,
      "created_at": "2025-09-14T02:47:02.811+00:00",
      "updated_at": "2025-09-14T02:47:02.811+00:00"
    },
    {
      "id": "219298a3-b25b-4e5c-b5d7-05adb24e3bd6",
      "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
      "display_name": "Test-Driven Development (TDD)",
      "technology_name": "Test-Driven Development (TDD)",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 25,
      "created_at": "2025-09-14T02:47:02.811+00:00",
      "updated_at": "2025-09-14T02:47:02.811+00:00"
    },
    {
      "id": "c3b7da9f-1622-47fa-b8b6-f6e639ef4929",
      "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
      "display_name": "GitHub Actions",
      "technology_name": "GitHub Actions",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 26,
      "created_at": "2025-09-14T02:47:02.811+00:00",
      "updated_at": "2025-09-14T02:47:02.811+00:00"
    },
    {
      "id": "455db950-c717-4cbc-845e-6a941508f601",
      "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
      "display_name": "Supabase",
      "technology_name": "Supabase",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 27,
      "created_at": "2025-09-14T02:47:02.811+00:00",
      "updated_at": "2025-09-14T02:47:02.811+00:00"
    },
    {
      "id": "e2dbde36-42f1-4c8c-81fe-86f3d3bc4538",
      "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
      "display_name": "Vercel",
      "technology_name": "Vercel",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 28,
      "created_at": "2025-09-14T02:47:02.811+00:00",
      "updated_at": "2025-09-14T02:47:02.811+00:00"
    },
    {
      "id": "8f935a92-ed88-4184-9de8-7b4cacca887e",
      "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
      "display_name": "scikit-learn",
      "technology_name": "scikit-learn",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 29,
      "created_at": "2025-09-14T02:47:02.811+00:00",
      "updated_at": "2025-09-14T02:47:02.811+00:00"
    },
    {
      "id": "32dbbe0c-a424-494e-ba1a-ffc0a6354202",
      "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
      "display_name": "Flask",
      "technology_name": "Flask",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 30,
      "created_at": "2025-09-14T02:47:02.811+00:00",
      "updated_at": "2025-09-14T02:47:02.811+00:00"
    },
    {
      "id": "19ce832b-f6b4-4d76-8378-4e54fbd1f169",
      "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
      "display_name": "React Native",
      "technology_name": "React Native",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 31,
      "created_at": "2025-09-14T02:47:02.811+00:00",
      "updated_at": "2025-09-14T02:47:02.811+00:00"
    },
    {
      "id": "5fc20981-66cc-44cb-95cc-8828e406d1f4",
      "user_id": "d42bc912-a6d3-4955-8d60-dcfd564b1cb9",
      "display_name": "SQLite",
      "technology_name": "SQLite",
      "logo_type": "default",
      "logo_data": null,
      "order_index": 32,
      "created_at": "2025-09-14T02:47:02.811+00:00",
      "updated_at": "2025-09-14T02:47:02.811+00:00"
    }
  ],
  "customSections": [],
  "sectionOrder": null
}

// Component layout preferences
const portfolioConfig = {
  "user_info_layout_type": "userInfo1",
  "projects_layout_type": "projects1",
  "skills_layout_type": "skills1",
  "education_layout_type": "card",
  "work_layout_type": "card",
  "github_repo_name": "p32",
  "github_username": "Greg057",
  "github_repo_url": "https://github.com/Greg057/p32"
}

export default function Portfolio() {
  return (
    <PortfolioLayout
      personalInfo={userData.userInfo}
      educations={userData.educations || []}
      experiences={userData.experiences || []}
      projects={userData.projects || []}
      userTechnologies={userData.userTechnologies || []}
      customSections={userData.customSections || []}
      userInfoLayoutType={portfolioConfig?.user_info_layout_type || 'userInfo1'}
      projectsLayoutType={portfolioConfig?.projects_layout_type || 'projects1'}
      skillsLayoutType={portfolioConfig?.skills_layout_type || 'skills1'}
      educationLayoutType={portfolioConfig?.education_layout_type || 'card'}
      workLayoutType={portfolioConfig?.work_layout_type || 'card'}
      sectionOrder={userData.sectionOrder || undefined}
    />
  )
}