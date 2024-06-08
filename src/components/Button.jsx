import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Button = ({ to, children }) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    // Chạy hiệu ứng Ripple
    const btn = event.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;

    const rect = btn.getBoundingClientRect();
    const scrollLeft = document.documentElement.scrollLeft;
    const scrollTop = document.documentElement.scrollTop;

    circle.style.left = `${event.pageX - (rect.left + scrollLeft + radius)}px`;
    circle.style.top = `${event.pageY - (rect.top + scrollTop + radius)}px`;

    circle.classList.add("ripple");

    const ripple = btn.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    btn.appendChild(circle);

    // Chuyển hướng sau khi kết thúc Ripple
    setTimeout(() => {
      navigate(to);
    }, 500); // Thời gian hiệu ứng (có thể điều chỉnh)

    // Xóa event listener để tránh memory leak
    btn.removeEventListener("click", handleClick);
  };

  return (
    <button
      type="button"
      id="bt"
      className="border font-bold rounded-full px-10 py-1 min-w-max overflow-hidden relative bg-peach-1 hover:bg-peach-0 hover:border hover:border-peach-1 hover:text-peach-1"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
