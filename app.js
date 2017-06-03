var express = require('express');

var app = express();

var port = 5000;

app.use(express.static('public'));

app.get('/cv',function(req,res){
    res.json({
        basicInfo:{
            firstName:'Tima',
            lastName:'Chekurov',
            spec:'Student'
        },
        
        contact:{
            phone:'054-227-2365',
            area:'7 Hen St,Petah Tiqwa,Israel',
            email:'mcloha@gmail.com'
        },
        
        aboutMe:{
            info:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        },
        
        socialNetworks: [
            {
                name: 'Facebook',
                link: '#',
                'iconName': 'facebook'
            },
            {
                name: 'Linkedin',
                link: '#',
                'iconName': 'linkedin'
            },
            {
                name: 'twiter',
                link: '#',
                'iconName': 'twitter'
            },
            {
                name: 'youtube',
                link: '#',
                'iconName': 'youtube'
            },
        ],
        
        experience: [
            {
                name:'Bleecker Bakery',
                job:'Cook',
                years:'2009-2012',
                location:'Israel',
                about:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.'
            },
            {
                name:'IDF',
                job:'Driver',
                years:'2012-2015',
                location:'Israel',
                about:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.'
            },
             {
                name:'018 Exphone',
                job:'Shift supervisor',
                years:'2015-NOW',
                location:'Israel',
                about:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.'
            },
        ],
        
        skills:[
            {
                name:'Photoshop',
                lvl:75
            },
            {
                name:'HTML',
                lvl:90
            },
            {
                name:'CSS',
                lvl:85
            },
            {
                name:'JavaScript',
                lvl:70
            }
        ],
        
        talents: [
            {
                name:'Creativity',
                lvl:95
            },
            {
                name:'Patience',
                lvl:85
            },
            {
                name:'Ponctuality',
                lvl:100
            },
            {
                name:'Leadership',
                lvl:90
            }
        ],
        
        education: [
            {
                course:'Network Admin',
                years:'2005-2008',
                name:'Amal Alef',
                location:'Israel',
                about:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.'
            },
            {
                course:'ICMP',
                years:'2014-2015',
                name:'CISCO',
                location:'Israel',
                about:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.'
            },
            {
                course:'Program Engineer',
                years:'2016-2018',
                name:'ORT Singalovsky',
                location:'Israel',
                about:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.'
            }
        ],
        
        hobbies: [
            {
                name: 'Photography',
                'iconName': 'camera'
            },
            {
                name: 'Music',
                'iconName': 'music'
            },
            {
                name: 'Football',
                'iconName': 'futbol-o'
            },
            {
                name: 'Cycling',
                'iconName': 'bicycle'
            },
            {
                name: 'Reading',
                'iconName': 'book'
            },
            {
                name: 'Video Games',
                'iconName': 'gamepad'
            },
        ],
        
        languages: [
            {
                name:'Russian',
                lvl:100
            },
            {
                name:'Hebrew',
                lvl:100
            },
            {
                name:'English',
                lvl:90
            },
        ]
    });
});

app.listen(port,function(err){
   console.log('running server on port ' + port); 
});