export const Card = ({ children, className }) => (
  <div className={`bg-white rounded shadow p-4 ${className}`}>{children}</div>
);

export const CardHeader = ({ children }) => <div className="mb-2">{children}</div>;
export const CardTitle = ({ children }) => <h3 className="font-bold text-lg">{children}</h3>;
export const CardDescription = ({ children }) => <p className="text-gray-500">{children}</p>;
export const CardContent = ({ children }) => <div>{children}</div>;
