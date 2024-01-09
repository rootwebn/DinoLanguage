import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useConfigContext } from '@/entities/trainerLevel/model/useConfigContext';

export const ConfigFormSet = () => {
  const setDifficultGame = useConfigContext((s) => s.setDifficultGame);
  const setTimeOnStage = useConfigContext((s) => s.setTimeOnStage);
  const setWordGenMin = useConfigContext((s) => s.setWordsGenLimit);
  const setPeacefulMode = useConfigContext((s) => s.setPeacefulMode);

  const configFormSchema = z
    .object({
      wordsMemo: z
        .number()
        .min(1, 'Write smt')
        .max(23, "Can't be more than 23 words to memo"),
      time: z
        .number()
        .min(10, 'minimal time is 10 seconds')
        .max(60, 'max time is 60 seconds')
        .positive()
        .int(),
      difficult: z
        .number()
        .min(1, 'minimal difficult is A1')
        .max(6, 'max difficult is C2'),
      peacefulMode: z.boolean().default(false),
    })
    .required();

  const onSubmit = (value: z.infer<typeof configFormSchema>) => {
    setPeacefulMode(value.peacefulMode);
    setDifficultGame(value.difficult);
    setWordGenMin(value.wordsMemo);
    setTimeOnStage(value.time);
  };

  const configForm = useForm<z.infer<typeof configFormSchema>>({
    resolver: zodResolver(configFormSchema),
    defaultValues: {
      wordsMemo: 6,
      time: 20,
      difficult: 2,
      peacefulMode: false,
    },
  });

  return {
    onSubmit,
    configForm,
  };
};
