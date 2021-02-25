$(function() {
  // Main API call
  var ip = "8.8.8.8";
  var api_key = "at_G1U45uIhXypSzmc2JkrjzHg1VsDzp";
  $(function () {
     $.ajax({
         url: "https://geo.ipify.org/api/v1",
         method: "GET",
         dataType: "json",
         data: {
          apiKey: api_key, 
          ipAddress: ip,
        },
         success: function(data) {              
            var ip = data.ip
            var region = data.location.region 

            $(".country").html(ip);
            $("#searchbox").val(ip);
            $("body").append("<pre>"+ JSON.stringify(data,"",2)+"</pre>");
         }
     });
  });
});
