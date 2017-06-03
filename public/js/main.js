$(function(){
    $.get('/cv',function(data){
        console.log('got data');
        
        /*Basic Info JSON*/
        $('#basicInfo h1').html(data.basicInfo.firstName);
        $('#basicInfo h1+h1').html(data.basicInfo.lastName);
        $('#basicInfo h3').html(data.basicInfo.spec);
        
        /*Contact Info JSON*/
        $('#contact ul+ul li').html(data.contact.phone);
        $('#contact ul+ul li+li').html(data.contact.area);
        $('#contact ul+ul li+li+li').html(data.contact.email);
        
        /*About Me JSON*/
        $('#aboutMe p').html(data.aboutMe.info);
        
        /*Social Networks JSON*/
        $('#bottom').append('<ul id="social-networks">');
        for(i in data.socialNetworks){
            $('#social-networks').append('<li><i class="fa fa-'+data.socialNetworks[i].iconName+'"></i><br>' + data.socialNetworks[i].name + '</li>');
        }
        
        /*Expirience JSON*/
        $('#work').append('<ul id="work-exp">');
        for(i in data.experience){
            $('#work-exp').append('<li><h2>' + data.experience[i].name + '<br>' + data.experience[i].job + '</h2><p>' + data.experience[i].years + '</p></li>')
        }
        $('#work').append('<ul id="work-disc">');
        for(i in data.experience){
            $('#work-disc').append('<li><h3>Works in ' + data.experience[i].name + '-' + data.experience[i].location + '</h3><p>'+ data.experience[i].about +'</p></li>')
        }
        
        /*Skills JSON*/
        $('#bars').append('<ul id="skillJSN">');
        for(i in data.skills){
            $('#skillJSN').append('<li>' + data.skills[i].name + '</li>');
        }
        $('#bars').append('<ul id="barsJSN">');
        for(i in data.skills){
            $('#barsJSN').append('<li><progress max="100" value="' + data.skills[i].lvl + '"></progress></li>');
        }
        $('#perSkills').append('<ul id="tallentsJSN">');
        for(i in data.skills){
            $('#tallentsJSN').append('<li>' + data.talents[i].name + '</li>');
        }
        $('#perSkills').append('<ul id="bars2JSN">');
        for(i in data.skills){
            $('#bars2JSN').append('<li><progress max="100" value="' + data.talents[i].lvl + '"></progress></li>');
        }
        
         /*Education JSON*/
         $('#edu').append('<ul id="leftEdu">');
        for(i in data.education){
            $('#leftEdu').append('<li><h2>' + data.education[i].course + '<br></h2><p>' + data.education[i].years + '</p></li>');
        }
         $('#edu').append('<ul id="rightEdu">');
        for(i in data.education){
            $('#rightEdu').append('<li><h3>' + data.education[i].name + ' - ' + data.education[i].location + '</h3><p>' + data.education[i].about + '</p></li>');
        }
        
        /*Social Networks JSON*/
        $('#hobIcons').append('<ul id="hobbiesUL">');
        for(i in data.hobbies){
            $('#hobbiesUL').append('<li><i class="fa fa-'+data.hobbies[i].iconName+'"></i><br>' + data.hobbies[i].name + '</li>');
        }
        
        
        /*Languages JSON*/
        $('#langBars').append('<ul id="langJSN">');
        for(i in data.languages){
            $('#langJSN').append('<li>' + data.languages[i].name + '</li>');
        }
        $('#langBars').append('<ul id="langLVLJSN">');
        for(i in data.languages){
            $('#langLVLJSN').append('<li><progress max="100" value="' + data.languages[i].lvl + '"></progress></li>');
        }
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    });
});