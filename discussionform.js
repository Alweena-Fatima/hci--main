// discussions.js

// Sample discussion data for different categories
const discussionData = {
    apple: [
      {
        title: "MacBook Air problem",
        posts: [
          {
            user: "123-blahblahblah",
            content: "MacBook Air problem",
            date: "2025-04-06 15:08",
            indent: 0,
            votes: 0
          },
          {
            user: "4Qtoo",
            content: "Do you know what the macOS version is?",
            date: "2025-04-07 05:27",
            indent: 1,
            votes: -5
          },
          {
            user: "123-blahblahblah",
            content: "OS Monterey",
            date: "2025-04-07 05:43",
            indent: 2,
            votes: 0
          },
          {
            user: "4Qtoo",
            content: "Do you have another Mac?",
            date: "2025-04-09 16:52",
            indent: 2,
            votes: 0,
            link: true
          },
          {
            user: "123-blahblahblah",
            content: "Yes & No",
            date: "2025-04-13 07:20",
            indent: 3,
            votes: 0
          },
          {
            user: "4Qtoo",
            content: "I don't know if you are aware of EtreCheck?",
            date: "2025-04-10 11:45",
            indent: 4,
            votes: 0
          },
          {
            user: "Max1000",
            content: "Just take it to an Apple store",
            date: "2025-04-18 08:22",
            indent: 4,
            votes: 0
          },
          {
            user: "humhead",
            content: "I suggest backup your works",
            date: "2025-04-07 11:43",
            indent: 1,
            votes: -5
          },
          {
            user: "Max1000",
            content: "Sounds to me like a kernel panic",
            date: "2025-04-09 16:12",
            indent: 1,
            votes: -5
          },
          {
            user: "GuessGame",
            content: "I wonder if doing this would point out what the",
            date: "2025-04-10 11:45",
            indent: 1,
            votes: 0
          },
          {
            user: "123-blahblahblah",
            content: "Diagnostics",
            date: "2025-04-19 08:47",
            indent: 2,
            votes: 0
          }
        ]
      }
    ],
    arts: [
        {
        title: "Upcoming local art exhibitions",
        posts: [
            {
            user: "ArtLover42",
            content: "Does anyone know of any good art exhibitions happening this month?",
            date: "2025-04-03 14:20",
            indent: 0,
            votes: 7
            },
            {
            user: "GalleryCurator",
            content: "The Modern Art Gallery has a new impressionist exhibition opening Friday.",
            date: "2025-04-03 16:45",
            indent: 1,
            votes: 12
            },
            {
            user: "StreetArtFan",
            content: "There's a street art festival in the downtown area next weekend.",
            date: "2025-04-04 09:30",
            indent: 1,
            votes: 5
            }
        ]
        },
        {
        title: "Digital art software recommendations",
        posts: [
            {
            user: "DigitalNewbie",
            content: "What's the best software for beginners in digital art?",
            date: "2025-04-10 10:15",
            indent: 0,
            votes: 4
            },
            {
            user: "ProIllustrator",
            content: "I recommend starting with Krita - it's free and powerful.",
            date: "2025-04-10 11:30",
            indent: 1,
            votes: 8
            }
        ]
        }
    ],
    
    autos: [
        {
        title: "Best used cars under $10k",
        posts: [
            {
            user: "FirstCarBuyer",
            content: "Looking for a reliable used car under $10k. Any suggestions?",
            date: "2025-04-07 08:45",
            indent: 0,
            votes: 6
            },
            {
            user: "CarGuru99",
            content: "Honda Civic or Toyota Corolla from 2015-2017 would be your best bet.",
            date: "2025-04-07 09:20",
            indent: 1,
            votes: 15
            },
            {
            user: "MechanicMike",
            content: "Make sure to get any used car inspected before purchase!",
            date: "2025-04-07 10:05",
            indent: 1,
            votes: 10
            }
        ]
        },
        {
        title: "Electric vs hybrid vehicles",
        posts: [
            {
            user: "EcoDriver",
            content: "Trying to decide between full electric or hybrid. Thoughts?",
            date: "2025-04-12 13:15",
            indent: 0,
            votes: 5
            },
            {
            user: "EVOwner",
            content: "Depends on your daily commute. For city driving, full electric is great.",
            date: "2025-04-12 14:30",
            indent: 1,
            votes: 7
            }
        ]
        }
    ],
    jobs: [
      {
        title: "Remote work opportunities",
        posts: [
          {
            user: "JobHunter22",
            content: "Looking for remote work in web development. Any leads?",
            date: "2025-04-05 09:15",
            indent: 0,
            votes: 3
          },
          {
            user: "TechRecruiter",
            content: "We have several openings. Check our careers page.",
            date: "2025-04-05 11:30",
            indent: 1,
            votes: 5
          }
        ]
      }
    ],
    sac: [
      {
        title: "Any way to block texts",
        posts: [
          {
            user: "Bella_blue",
            content: "Any way to block texts",
            date: "2025-04-02 16:15",
            indent: 0,
            votes: 5
          },
          {
            user: "GuessGame",
            content: "The trick that works for me.",
            date: "2025-04-02 17:52",
            indent: 1,
            votes: -10
          },
          {
            user: "humhead",
            content: "If these are from a repeating number",
            date: "2025-04-03 10:17",
            indent: 1,
            votes: -5
          },
          {
            user: "MacMajor01",
            content: "I agree with humhead",
            date: "2025-04-05 11:15",
            indent: 1,
            votes: 5
          },
          {
            user: "Max1000",
            content: "The 2nd part I agree with.",
            date: "2025-04-09 16:17",
            indent: 3,
            votes: -5
          },
          {
            user: "Max1000",
            content: "Not that I am aware of",
            date: "2025-04-09 16:15",
            indent: 1,
            votes: -5
          },
          {
            user: "humhead",
            content: "Wrong again Max1000",
            date: "2025-04-24 07:22",
            indent: 2,
            votes: -5,
            link: true
          },
          {
            user: "Bella_blue",
            content: "Thank you!",
            date: "2025-04-24 07:33",
            indent: 3,
            votes: 5
          },
          {
            user: "humhead",
            content: "Bella_blue yw!!",
            date: "2025-04-25 08:08",
            indent: 5,
            votes: 0
          },
          {
            user: "Max1000",
            content: "That link is for a Mac.",
            date: "2025-04-25 21:35",
            indent: 4,
            votes: 0
          },
          {
            user: "4Qtoo",
            content: "Doesn't your provider offer the service to block",
            date: "2025-04-09 16:54",
            indent: 1,
            votes: 0
          }
        ]
      }
    ]
  };
  
  // Function to load discussions for a category
  function loadCategoryDiscussions(category) {
    const threadsContainer = document.getElementById('threads');
    threadsContainer.innerHTML = '';
    
    // Update the category title
    document.getElementById('categoryTitle').textContent = `${category.charAt(0).toUpperCase() + category.slice(1)} Discussions`;
    
    // Check if we have data for this category
    if (discussionData[category]) {
      discussionData[category].forEach(thread => {
        const threadElement = document.createElement('div');
        threadElement.className = 'card mb-4';
        
        let threadHTML = `
          <div class="card-header thread-title">${thread.title}</div>
          <div class="card-body">
            <div class="discussion-thread">
        `;
        
        thread.posts.forEach(post => {
          const voteClass = post.votes > 0 ? 'positive-vote' : (post.votes < 0 ? 'negative-vote' : '');
          
          threadHTML += `
            <div class="discussion-post indent-${post.indent}">
              <div class="post-header">
                <span class="username">${post.user}</span>
                <span class="vote-count ${voteClass}">${post.votes !== 0 ? post.votes : ''}</span>
              </div>
              <div class="post-meta">${post.date}</div>
              <div class="post-content">${post.content} ${post.link ? '<i class="fa-solid fa-link"></i>' : ''}</div>
            </div>
          `;
        });
        
        threadHTML += `
            </div>
          </div>
        `;
        
        threadElement.innerHTML = threadHTML;
        threadsContainer.appendChild(threadElement);
      });
    } else {
      // Default message if no data for this category
      threadsContainer.innerHTML = `
        <div class="card">
          <div class="card-body">
            <p>No discussions found for this category. Start a new discussion!</p>
          </div>
        </div>
      `;
    }
  }
  
  // Initialize the page
  document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to category items
    document.querySelectorAll('.list-group-item').forEach(item => {
      item.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        loadCategoryDiscussions(category);
      });
    });
  
    // Form submission for new threads
    document.getElementById('newThreadForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const title = document.getElementById('threadTitle').value;
      const content = document.getElementById('threadContent').value;
      
      const thread = document.createElement('div');
      thread.className = 'card my-2';
      thread.innerHTML = `<div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">${content}</p>
                        </div>`;
      document.getElementById('threads').prepend(thread);
      
      // Clear the form
      document.getElementById('threadTitle').value = '';
      document.getElementById('threadContent').value = '';
    });
    // Add this to your discussionform.js file, after the existing code

// Search functionality
    document.getElementById('discussionSearch').addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const threads = document.querySelectorAll('#threads .card');
        
        if (searchTerm.trim() === '') {
        // If search is empty, show all threads
        threads.forEach(thread => {
            thread.style.display = '';
        });
        return;
        }
    
        threads.forEach(thread => {
        const title = thread.querySelector('.thread-title').textContent.toLowerCase();
        const posts = thread.querySelectorAll('.discussion-post');
        let hasMatch = false;
    
        // Check if title matches
        if (title.includes(searchTerm)) {
            hasMatch = true;
        } else {
            // Check post content for matches
            posts.forEach(post => {
            const content = post.querySelector('.post-content').textContent.toLowerCase();
            if (content.includes(searchTerm)) {
                hasMatch = true;
                // Highlight matching text
                const regex = new RegExp(searchTerm, 'gi');
                const highlightedContent = content.replace(regex, match => 
                `<span class="bg-warning">${match}</span>`
                );
                post.querySelector('.post-content').innerHTML = highlightedContent;
            }
            });
        }
    
        // Show/hide thread based on match
        thread.style.display = hasMatch ? '' : 'none';
        });
    });
    
    // Reset highlighting when search is cleared
    document.getElementById('discussionSearch').addEventListener('change', function() {
        if (this.value.trim() === '') {
        document.querySelectorAll('.post-content').forEach(content => {
            content.innerHTML = content.textContent;
        });
        }
    });
  
    // Initialize with jobs category
    loadCategoryDiscussions('jobs');
  });