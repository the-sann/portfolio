function Skill() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mt-10 bg-white ">
        <div className="p-8 border-r-2">
          <h1 className="text-4xl font-bold">CSS</h1>
          <p className="mt-2 text-gray-600">
            Styling modern and responsive user interfaces using CSS and
            Tailwind.
          </p>
          <ul className="ml-4 mt-2 list-disc">
            <li>Flexbox & Grid Layout</li>
            <li>Responsive Design</li>
            <li>Hover Effects & Animations</li>
          </ul>
        </div>

        <div className="p-8 border-r-2">
          <h1 className="text-4xl font-bold">React</h1>
          <p className="mt-2 text-gray-600">
            Building interactive and dynamic front-end applications with React.
          </p>
          <ul className="ml-4 mt-2 list-disc">
            <li>Component-Based Architecture</li>
            <li>React Hooks</li>
            <li>State Management</li>
          </ul>
        </div>

        <div className="p-8">
          <h1 className="text-4xl font-bold">Laravel</h1>
          <p className="mt-2 text-gray-600">
            Developing secure and scalable backend systems using Laravel.
          </p>
          <ul className="ml-4 mt-2 list-disc">
            <li>RESTful APIs</li>
            <li>Authentication & Authorization</li>
            <li>Database & Eloquent ORM</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skill;
