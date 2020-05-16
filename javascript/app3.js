$(document).ready(function () {

    let url = "https://newsapi.org/v2/everything?q=gardening&sortBy=popularity&pageSize=5&page=1&apiKey=4e9ac101e6a4442bbd34ef17afbd597c";
  
    $.ajax({
      url: url,
      method: "GET",
      dataType: "JSON",
  
      beforeSend: function () {
        $(".progress").show();
      },
  
      complete: function () {
        $(".progress").hide();
      },
  
      success: function (newsdata) {
        let output = "";
        let latestNews = newsdata.articles;
        for (var i in latestNews) {
          output +=`
              <div class="card-content">
                <h6 class="truncate"><a href="${latestNews[i].url}" title="${latestNews[i].title}">${latestNews[i].title}</a></h6>
              </div>
          </div>
            
             `;
        }
  
        if (output !== "") {
          $("#OtherNews").html(output);
        }
  
      },
  
      error: function () {
        let errorMsg = `<div class="errorMsg center">Some error occured</div>`;
        $("#OtherNews").html(errorMsg);
      }
    })
  
  });