import UserForm from '@/components/forms/user-form';
import PathComponent from '@/components/path-component';

export default function EditUser({ params }: { params: { id: string } }) {
  return (
    <div>
      <PathComponent />
      <UserForm user={{ id: params.id }} />
    </div>
  );
}
