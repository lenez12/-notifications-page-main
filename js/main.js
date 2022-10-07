const unReadNotificationContent = document.querySelectorAll(
	".notification_content.unread"
);

const badgeRead = document.querySelectorAll(".red_badge");
const btnRead = document.querySelector(".notification_btn_read");

btnRead.addEventListener("click", () => {
	unReadNotificationContent.forEach((notif) => {
		notif.classList.remove("unread");
	});
	badgeRead.forEach((badge) => {
		badge.classList.remove("unread");
	});
});
