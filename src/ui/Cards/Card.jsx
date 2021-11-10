export const Card = ({ icon, title, text }) => (
  <div className="flex justify-center flex-row mb-10">
    <div class="px-10 max-w-sm mx-auto flex flex-col items-right space-x-4">
      <div className="mb-2">
        <img className="h-28 w-28" src={icon} alt="Hello" />
      </div>
      <div>
        <div class="text-xl font-medium text-blue-100">{title}</div>
        <p class="text-gray-100">{text}</p>
      </div>
    </div>
  </div>
);
