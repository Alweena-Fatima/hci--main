document.addEventListener('DOMContentLoaded', function() {
    // Toggle categories visibility
    const toggleCategories = document.getElementById('toggleCategories');
    const categoriesContent = document.getElementById('categoriesContent');
   
    toggleCategories.addEventListener('click', function() {
        const icon = this.querySelector('i');
        if (categoriesContent.style.display === 'none') {
            categoriesContent.style.display = 'block';
            icon.classList.remove('fa-chevron-right');
            icon.classList.add('fa-chevron-down');
        } else {
            categoriesContent.style.display = 'none';
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-right');
        }
    });


    // Toggle filters visibility
    const toggleFilters = document.getElementById('toggleFilters');
    const filtersContent = document.getElementById('filtersContent');
   
    toggleFilters.addEventListener('click', function() {
        const icon = this.querySelector('i');
        if (filtersContent.style.display === 'none') {
            filtersContent.style.display = 'block';
            icon.classList.remove('fa-chevron-right');
            icon.classList.add('fa-chevron-down');
        } else {
            filtersContent.style.display = 'none';
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-right');
        }
    });


    // Initialize display
    categoriesContent.style.display = 'block';
    filtersContent.style.display = 'block';


    // Salary range display
    const salaryRange = document.getElementById('salaryRange');
    const salaryValue = document.getElementById('salaryValue');
   
    salaryRange.addEventListener('input', function() {
        const minSalary = 0;
        const maxSalary = parseInt(this.value);
        salaryValue.textContent = `${minSalary.toLocaleString()} - ${maxSalary.toLocaleString()}`;
    });


    // Sample job data
    const jobData = [
        {
            id: 1,
            title: "Senior Software Engineer",
            company: "Tech Solutions Inc.",
            location: "San Francisco, CA",
            salary: "$120,000 - $150,000",
            type: "fulltime",
            experience: "5+ years",
            category: "software",
            posted: "2 days ago",
            description: "Looking for an experienced software engineer to lead our development team in building scalable web applications."
        },
        {
            id: 2,
            title: "Marketing Manager",
            company: "Creative Marketing Co.",
            location: "New York, NY",
            salary: "$80,000 - $95,000",
            type: "fulltime",
            experience: "3+ years",
            category: "marketing",
            posted: "1 week ago",
            description: "Seeking a creative marketing professional to develop and implement campaigns."
        },
        {
            id: 3,
            title: "Customer Service Rep",
            company: "Retail Solutions LLC",
            location: "Chicago, IL",
            salary: "$18 - $22/hr",
            type: "parttime",
            experience: "Entry Level",
            category: "customer",
            posted: "3 days ago",
            description: "Friendly customer service reps needed to handle inquiries and support customers."
        },
        {
            id: 4,
            title: "Data Scientist",
            company: "Analytics Pro",
            location: "Boston, MA",
            salary: "$110,000 - $140,000",
            type: "fulltime",
            experience: "3+ years",
            category: "it",
            posted: "5 days ago",
            description: "Join our data team to analyze complex datasets and build predictive models."
        },
        {
            id: 5,
            title: "Graphic Designer",
            company: "Design Studio X",
            location: "Austin, TX",
            salary: "$65,000 - $80,000",
            type: "contract",
            experience: "2+ years",
            category: "art",
            posted: "1 day ago",
            description: "Creative graphic designer needed to produce visual content for digital and print media."
        },
        {
            id: 6,
            title: "HR Coordinator",
            company: "People First Corp",
            location: "Seattle, WA",
            salary: "$55,000 - $65,000",
            type: "fulltime",
            experience: "1+ years",
            category: "hr",
            posted: "2 weeks ago",
            description: "Support HR operations including recruitment and employee relations."
        }
    ];


    // Display all jobs initially
    displayJobs(jobData);


    // Category filtering
    const categoryItems = document.querySelectorAll('.list-group-item');
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            categoryItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
           
            if (category === 'all') {
                displayJobs(jobData);
            } else {
                const filteredJobs = jobData.filter(job => job.category === category);
                displayJobs(filteredJobs);
            }
        });
    });


    // Job type filtering
    const jobTypeFilter = document.getElementById('jobType');
    jobTypeFilter.addEventListener('change', function() {
        const type = this.value;
        if (type === 'all') {
            displayJobs(jobData);
        } else {
            const filteredJobs = jobData.filter(job => job.type === type);
            displayJobs(filteredJobs);
        }
    });


    // Experience level filtering
    const experienceFilter = document.getElementById('experienceLevel');
    experienceFilter.addEventListener('change', function() {
        const level = this.value;
        if (level === 'all') {
            displayJobs(jobData);
        } else {
            const filteredJobs = jobData.filter(job => {
                if (level === 'entry') return job.experience.toLowerCase().includes('entry');
                if (level === 'mid') return /[2-4]\s*\+?\s*years/i.test(job.experience);
                if (level === 'senior') return /[5-9]\s*\+?\s*years/i.test(job.experience);
                if (level === 'executive') return /10\s*\+?\s*years/i.test(job.experience) || job.experience.toLowerCase().includes('executive');
                return true;
            });
            displayJobs(filteredJobs);
        }
    });


    // Sort functionality
    const sortBy = document.getElementById('sortBy');
    sortBy.addEventListener('change', function() {
        const sortValue = this.value;
        let sortedJobs = [...jobData];
       
        switch(sortValue) {
            case 'salaryLowHigh':
                sortedJobs.sort((a, b) => extractSalary(a.salary) - extractSalary(b.salary));
                break;
            case 'salaryHighLow':
                sortedJobs.sort((a, b) => extractSalary(b.salary) - extractSalary(a.salary));
                break;
            case 'dateNewOld':
                sortedJobs.sort((a, b) => extractTimeValue(a.posted) - extractTimeValue(b.posted));
                break;
            case 'dateOldNew':
                sortedJobs.sort((a, b) => extractTimeValue(b.posted) - extractTimeValue(a.posted));
                break;
            default:
                break;
        }
       
        displayJobs(sortedJobs);
    });


    // Helper function to extract numeric salary from string
    function extractSalary(salaryStr) {
        if (salaryStr.includes('/hr')) {
            const hourlyRate = parseFloat(salaryStr.replace(/[^\d.-]/g, ''));
            return hourlyRate * 2000;
        }
        const matches = salaryStr.match(/\$?([\d,]+)\s*-\s*\$?([\d,]+)/);
        if (matches) {
            return parseInt(matches[2].replace(/,/g, ''));
        }
        const singleValue = salaryStr.match(/\$?([\d,]+)/);
        return singleValue ? parseInt(singleValue[1].replace(/,/g, '')) : 0;
    }


    // Helper function to extract time value from "posted" string
    function extractTimeValue(postedStr) {
        const num = parseInt(postedStr);
        if (postedStr.includes('hour') || postedStr.includes('hr')) return num;
        if (postedStr.includes('day')) return num * 24;
        if (postedStr.includes('week')) return num * 168;
        if (postedStr.includes('month')) return num * 720;
        if (postedStr.includes('year')) return num * 8760;
        return num;
    }


    // Display jobs function
    function displayJobs(jobs) {
        const jobList = document.getElementById('jobList');
        jobList.innerHTML = '';
       
        if (jobs.length === 0) {
            jobList.innerHTML = '<div class="col-12"><div class="alert alert-info">No jobs found matching your criteria.</div></div>';
            return;
        }
       
        jobs.forEach(job => {
            const jobCard = `
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">${job.title}</h5>
                            <p class="card-text"><i class="fas fa-building me-2"></i>${job.company}</p>
                            <p class="card-text"><i class="fas fa-map-marker-alt me-2"></i>${job.location}</p>
                            <p class="card-text"><i class="fas fa-briefcase me-2"></i>${job.experience}</p>
                            <p class="card-text"><i class="fas fa-dollar-sign me-2"></i>${job.salary}</p>
                            <p class="card-text">${job.description}</p>
                        </div>
                        <div class="card-footer bg-transparent">
                            <small class="text-muted">Posted ${job.posted}</small>
                            <a href="#" class="btn btn-primary">View Details</a>
                        </div>
                    </div>
                </div>
            `;
           
            jobList.innerHTML += jobCard;
        });


        // Add hover effect to cards
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            });
            card.addEventListener('mouseleave', function() {
                this.style.transform = '';
                this.style.boxShadow = '';
            });
        });
    }
});


