import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui';
import { SettingsForm } from '@/entities/settings/settingsForm';

export const ActionsPanel = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Action Panel!</CardTitle>
        <CardDescription>
          Be careful here, you can manipulate all states here!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Card>
          <CardHeader>PersistBoundStore</CardHeader>
          <CardContent>
            <SettingsForm />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>BoundStore</CardHeader>
          <CardContent></CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};
