interface AboutCardProps {
  name: string;
  phoneNumber: string;
  email: string;
}
        
export default function AboutCard({name, phoneNumber, email}: AboutCardProps) {
  return (
    <article className="p-4 border-l-4 border-blue-600 bg-gray-50 rounded mt-6">
      <h3 className="text-xl text-gray-800 font-bold mb-2">{name}</h3>
      <p className="text-gray-700 mb-3">{phoneNumber}</p>
      <p className="text-gray-700 mb-3">{email}</p>
    </article>
  );
}