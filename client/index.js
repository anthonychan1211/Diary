const container = document.querySelector(".container");

// receive the data from server
const data = await fetch("http://localhost:3000/entries");
const entries = await data.json();

// create card for each play
entries.forEach((entry) => {
  const { content, date_time_entry, category } = entry;
  const card = document.createElement("div");
  card.className = "card";

  // append date and time
  const date = date_time_entry.slice(0, 10);
  const time = date_time_entry.slice(11, 16);

  const dateDOM = document.createElement("h2");
  dateDOM.className = "date";
  dateDOM.textContent = date;
  card.append(dateDOM);
  const timeDOM = document.createElement("h3");
  timeDOM.className = "time";
  timeDOM.textContent = time;
  card.append(timeDOM);
  // append the entry category
  const categoryDOM = document.createElement("p");
  categoryDOM.textContent = category;
  categoryDOM.className = "category";
  card.append(categoryDOM);
  //   create the title container
  const contentDOM = document.createElement("p");
  contentDOM.className = "content";
  contentDOM.textContent = content;
  card.append(contentDOM);

  //   create card onClick show detail listener

  card.addEventListener("click", (e) => showDetails(e, entry));

  //   append the card onto container
  container.append(card);
  //   check if user is admin then run the following function
  // createRemoveButton(card, play);
});

function showDetails(e, play) {
  const outerModal = document.createElement("div");
  outerModal.className = "outer-modal";
  const innerModal = document.createElement("div");
  innerModal.className = "inner-modal";
  outerModal.append(innerModal);
  document.body.append(outerModal);
  //   create two sections for innerModal
  const leftSection = document.createElement("div");
  leftSection.className = "modal-left";
  const rightSection = document.createElement("div");
  rightSection.className = "modal-right";
  innerModal.append(leftSection);
  innerModal.append(rightSection);

  // append date and time
  // const date = date_time_entry.slice(0, 10);
  // const time = date_time_entry.slice(11, 16);

  const dateDOM = document.createElement("h2");
  dateDOM.className = "date";
  dateDOM.textContent = date;
  card.append(dateDOM);
  const timeDOM = document.createElement("h3");
  timeDOM.className = "time";
  timeDOM.textContent = time;
  card.append(timeDOM);

  //   append the summary
  const summary = document.createElement("p");

  summary.textContent = play.synopsis;
  leftSection.append(summary);
  //   create  detail row for styling
  const detailRowDate = document.createElement("div");
  detailRowDate.className = "modal-detail-row";
  const detailRowTime = document.createElement("div");
  detailRowTime.className = "modal-detail-row";
  const detailRowDuration = document.createElement("div");
  detailRowDuration.className = "modal-detail-row";
  const detailRowPerformer = document.createElement("div");
  detailRowPerformer.className = "modal-detail-row";
  const detailRowButtonSection = document.createElement("div");
  detailRowButtonSection.className = "modal-detail-row button-section";

  //  append the details
  const date = document.createElement("p");
  date.className = "modal-details";
  date.textContent = ` ${play.date_time_played.slice(0, 10)}`;

  const dateHeader = document.createElement("p");
  dateHeader.className = "detail-header";
  dateHeader.textContent = "Performance Date :";

  detailRowDate.append(dateHeader);
  detailRowDate.append(date);
  rightSection.append(detailRowDate);

  const timeHeader = document.createElement("p");
  timeHeader.className = "detail-header";
  timeHeader.textContent = `Start at :`;
  detailRowTime.append(timeHeader);

  const time = document.createElement("p");
  time.className = "modal-details";

  time.textContent = `${play.date_time_played.slice(11, 16)}`;
  detailRowTime.append(time);
  rightSection.append(detailRowTime);

  const durationHeader = document.createElement("p");
  durationHeader.className = "detail-header";
  durationHeader.textContent = `Duration :`;
  detailRowDuration.append(durationHeader);

  const duration = document.createElement("p");
  duration.className = "modal-details";
  duration.textContent = `${play.duration} minutes`;
  detailRowDuration.append(duration);
  rightSection.append(detailRowDuration);
  const performerHeader = document.createElement("p");
  performerHeader.textContent = "Performers :";
  detailRowPerformer.append(performerHeader);

  const performer = document.createElement("p");
  performer.className = "performer-list";
  performer.textContent = play.actor_list;
  detailRowPerformer.append(performer);
  rightSection.append(detailRowPerformer);

  //   add buy ticket and cancel button

  const buyButton = document.createElement("button");
  buyButton.className = "buy-button";
  buyButton.textContent = "Buy Ticket";
  detailRowButtonSection.append(buyButton);
  const cancelButton = document.createElement("button");
  cancelButton.className = "cancel-button";
  cancelButton.textContent = "Cancel";
  cancelButton.addEventListener("click", () => outerModal.remove());
  detailRowButtonSection.append(cancelButton);
  rightSection.append(detailRowButtonSection);
}
function createRemoveButton(card, play) {
  // create remove function
  const removeButton = document.createElement("button");
  removeButton.className = "remove-button";
  removeButton.textContent = "Remove Play";
  removeButton.addEventListener("click", async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const res = await fetch(`http://localhost:3000/plays/${play.play_id}`, {
      method: "DELETE",
    });
    if (res.status === 204) {
      alert("Plays deleted!");
      e.target.closest(".card").remove();
    }
  });
  card.append(removeButton);
}

//   create add play function
const addPlayCard = document.createElement("div");
addPlayCard.className = "add-play-card";
const addPlayButton = document.createElement("button");
addPlayButton.textContent = "Add Play";
addPlayButton.className = "add-play-button";
addPlayCard.append(addPlayButton);
container.append(addPlayCard);
