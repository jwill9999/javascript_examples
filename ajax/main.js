(function () {


  var root = 'https://jsonplaceholder.typicode.com/posts/';
  var $orders = $('#orders');


  //
   /************************************************************
   *************************************************************
   *****************function to append data to dom *************
   *************************************************************
   *************************************************************/

  function addpost(posts) {
    for (var post of posts) {
      if (post.id <= 3) {
        var $string = "";
        $string= '<li>Id Number : ' + post.id + '</br>';
        $string+= 'UserId : ' + post.userId + '</br>';
        $string += 'Title : ' + post.title + '</br>';
        $string += 'Body : ' + post.body + '</li>';

        var stringoutput = $string;
        $orders.append(stringoutput);       
      }
    }    
  }

  
   /************************************************************
   *************************************************************
   *****************get request to api for data*****************
   *************************************************************
   *************************************************************/

  $.ajax({
    url: root,
    method: 'GET'
  }).then(function (data) {
    addpost(data);
  });



  /*************************************************************
   *************************************************************
   ********** POST adds a random id to the object sent**********
   *************************************************************
   *************************************************************/

  /*serializeArray produces an array of data entered into the form . 
  This is the accessed via there index and assigned a key for each
  That result produces a promise and we resolve it and call the addpost
  function passing the newdata. The addpost function then appends
   the json data recieved to the dom*/


  $("#addForm").on("submit", function (event) {
    event.preventDefault();
    var results = $(this).serializeArray();
    console.log(results);
    var data = {
      title: results[0].value,
      body: results[1].value,
      userid: results[2].value
    };

    $.ajax(root, {
      method: 'POST',
      data: data,
    }).then(function (newdata) {
      console.log(newdata);
      addpost(newdata);
    });
  });




  /*************************************************************
   *************************************************************
   *********************Update a resource***********************
   *************************************************************
   *************************************************************/


 $("#updateForm").on("submit", function (event) {
    event.preventDefault();
    var updates = $(this).serializeArray();
    console.log(updates);
    var updateddata = {
      title: updates[0].value,
      body: updates[1].value,
      userid: updates[2].value,
      id: updates[3].value
    };
$.ajax( root + updateddata .id, {
  method: 'PUT',
  data: updateddata,
}).then(function(changedData) {
  console.log(root + updateddata .id);
  console.log(changedData);
});
});


  /*************************************************************
   *************************************************************
   *********************Delete a resource***********************
   *************************************************************
   *************************************************************/

$.ajax('http://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE'
});


 /*************************************************************
   *************************************************************
   *********************find posts by userid**********************
   *************************************************************
   *************************************************************/

// Will return all the posts that belong to the first user

$.ajax('http://jsonplaceholder.typicode.com/posts?userId=1').then(function(data) {
  console.log(data);
});


 /*************************************************************
   *************************************************************
   *********************find nested Properties*********************
   *************************************************************
   *************************************************************/

$.ajax('http://jsonplaceholder.typicode.com/posts/1/comments').then(function(data) {
  console.log(data);
});

// Which is equivalent to /comments?postId=1

})();//IIFE