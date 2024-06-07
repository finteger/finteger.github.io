    const profilePicture = document.getElementById('profilePicture');
    const logo = document.getElementById('logo');
    const originalText = logo.innerText;
    const hoverText = 'Welcome to My Profile';
    var td = document.querySelectorAll('td');


    td.forEach(function(element) {
      var bullet = document.createTextNode('\u2022 ');
      
       
      element.prepend(bullet);
    });
    
    
    profilePicture.addEventListener('mouseover', () => {
      logo.style.opacity = '0';
      logo.style.animation = 'bounce 3s infinite';
      setTimeout(() => {
        logo.innerText = hoverText;
        logo.style.opacity = '1';
      }, 300);
    });
    
    profilePicture.addEventListener('mouseout', () => {
      logo.style.opacity = '0';
      logo.style.animation = 'none';
      setTimeout(() => {
        logo.innerText = originalText;
        logo.style.opacity = '1';
      }, 300);
    });
