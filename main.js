fetch("./db.json")
  .then(response => { return response.json() })
  .then(db => {
    for (let i = 0; i < db.length; i++) {
      $(".userContainer").append(
        `
    <div class="userItem" id="c${db[i].code}">
      <span>${db[i].code}</span>
      <span>${db[i].name}</span>
      <span>${db[i].age}</span>
    </div>
    `
      );
    }

    $('.userContainer').click((e) => {
      $("#userCard").css("display", "block");
      $(".page").css("filter", "blur(10px)");

      let userID = (e.target.id).substring(1);
      for (let i = 0; i < db.length; i++) {
        if (db[i].code == userID) {
          // alert(db[i].money + '$');
          $("#name").text(db[i].name);
          $("#code").text(db[i].code);
          $("#age").text(db[i].age);
          $("#length").text(db[i].length);
          $("#weight").text(db[i].weight);
          $("#money").text(db[i].money);
        }
      }

    });

    $("#apply").click(() => {
      let minAge = $("#minAge").val();
      let maxAge = $("#maxAge").val();

      $(".userContainer").empty();
      for (let i = 0; i < db.length; i++) {
        if (db[i].age >= minAge &&
          db[i].age <= maxAge) {
          $(".userContainer").append(
            `
            <div class="userItem" id="c${db[i].code}">
              <span>${db[i].code}</span>
              <span>${db[i].name}</span>
              <span>${db[i].age}</span>
            </div>
            `
          );
        }
      }
    });

    $("#rangeInp").on('input', () => {
      let current = $("#rangeInp").val();
      $("#val").text(current);

      $(".userContainer").empty();
      for (let i = 0; i < db.length; i++) {
        if (db[i].length == current) {
          $(".userContainer").append(
            `
            <div class="userItem" id="c${db[i].code}">
              <span>${db[i].code}</span>
              <span>${db[i].name}</span>
              <span>${db[i].age}</span>
            </div>
            `
          );
        }
      }
    });

    $("#older").click(() => {
      $(".userContainer").empty();
      for (let i = 0; i < db.length; i++) {
        for (let j = db.length - 1; j > 0; j--) {
          if (db[j].age > db[j - 1].age) {
            let temp = db[j];
            db[j] = db[j - 1];
            db[j - 1] = temp;
          }
        }
        $(".userContainer").append(
          `
          <div class="userItem" id="c${db[i].code}">
            <span>${db[i].code}</span>
            <span>${db[i].name}</span>
            <span>${db[i].age}</span>
          </div>
          `
        );
      }
    });

    $("#younger").click(() => {
      $(".userContainer").empty();
      for (let i = 0; i < db.length; i++) {
        for (let j = db.length - 1; j > 0; j--) {
          if (db[j].age < db[j - 1].age) {
            let temp = db[j];
            db[j] = db[j - 1];
            db[j - 1] = temp;
          }
        }
        $(".userContainer").append(
          `
          <div class="userItem" id="c${db[i].code}">
            <span>${db[i].code}</span>
            <span>${db[i].name}</span>
            <span>${db[i].age}</span>
          </div>
          `
        );
      }
    });
  })