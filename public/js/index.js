$(document).ready(function() {
  //Build out the burger list.
  const getAllBurgers = cb => {
    fetch("/api/burger")
      .then(resp => resp.json())
      .then(res => {
        cb(res);
      });
  };

  //DEVOUR  BURGER BUTTON
  $(document).on("click", ".devour", function(event) {
    console.log("test");
    var id = $(this).data("burgerid");
    console.log(id);
    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT"
    })
      .then(function() {
        console.log("deleted id ", id);
        // Reload the page to get the updated list
        location.reload();
      })
      .catch(err => {
        throw err;
      });
  });

  //Get all the burgers
  getAllBurgers(function(res) {
    let $burgerList = $(".burgersList");

    res.filter(burger => {
      if (!burger.devoured) {
        $burgerList.append(`
			<li class="collection-item">
			  <span>${burger.burger_name}</span>
			  <button style="color: red; font-size: 14px;" class="material-icons devour" data-burgerID=${burger.id}>clear</button>

			</li>`);
      }
    });
  });

  $("form").on("submit", e => {
    e.preventDefault();
    let $burger = $("#burgerInput");
    console.log($burger.val());

    fetch("/api/burger", {
      method: "POST",
      body: JSON.stringify({ burger_name: $burger.val() }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        location.reload();
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  });
});
