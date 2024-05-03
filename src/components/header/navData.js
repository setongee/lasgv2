export const navigationRoutes = {

    route1 : {
        parentName : "Government",
        theme : "#f9f9f9",
        isNest : true,
        index : 1,
        nests : {
            heading : 'Explore the Lagos State Government, Officials and Parastatals.',
            vector : '#',
            links : [ 

                {
                    name : 'Elected Officials',
                    desc : 'View all the officers elected by lagosians this tenure.',
                    url : 'government/elected_officials'
                },
                
                {
                    name : 'Explore Ministries and Departments',
                    desc : 'Explore Lagos State Ministries, Departments and Agencies',
                    url : 'government/mdas/all'
                },
                {
                    name : 'Legislative Officers',
                    desc : 'View all the Legitlative Officers elected by lagosians this tenure.',
                    url : 'government/legistlative_officials'
                },
                {
                    name : 'Judiciary Officers',
                    desc : 'View all the Judiciary Officers appointed for this tenure.',
                    url : 'government/judiciary_officials'
                } 

            ]
        }
    },

    route2 : {
        parentName : "Services",
        theme : "#f9f9f9",
        isNest : true,
        index : 2,
        nests : {
            heading : 'Connecting the citizens of Lagos State to engage with their Government.',
            vector : '#',
            links : [ 

                {
                    name : 'Popularly Searched Services',
                    desc : 'View the top 6 most searched services in Lagos State.',
                    url : '#'
                },
                
                {
                    name : 'Online Fees and Payments',
                    desc : 'View all supported digital fees & payments',
                    url : '#'
                },
                {
                    name : 'Apply for Lagos State Scholarship & Bursary',
                    desc : 'Recieve support and schorlaship for Lagosians',
                    url : '#'
                },
                {
                    name : 'View All Government Services',
                    desc : 'View all the services offered by Lagos State',
                    url : '#'
                } 

            ]
        }
    },

    route3 : {
        parentName : "News & Events",
        theme : "#f9f9f9",
        isNest : false,
        index : 3,
        url : '/news'
    },

    route4 : {
        parentName : "Connect",
        theme : "#f9f9f9",
        isNest : false,
        index : 4,
        url : '/connect'
    },

    route5 : {
        parentName : "Search",
        theme : "#f9f9f9",
        isNest : false,
        index : 5,
        url : '/search'
    }
}