const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}
$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#clickMeButton').click(()=>{
        clickMe();
    })
    getProjects();
});


const getProjects = () => {
  $.get('/api/projects', (response) => {
    if (response.statusCode == 200) {
      addCards(response.data);
    }
  });
};
