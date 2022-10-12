import { useEffect, useState } from 'react';
import { AreaChart, Block, Card, Flex, Icon, Text, Title, Toggle, ToggleItem } from '@tremor/react';
import { Info } from 'phosphor-react';
import { ExerciseProps } from '../types/exercise';
import { formatDateFromDatabase } from '../utils/formatDate';

const numberFormatter = (value: number) => (`${Intl.NumberFormat('us').format(value).toString()}`);

export function Chart({ days }: Pick<ExerciseProps, 'days'>) {
  const [selectedOption, setSelectedOption] = useState<'weight' | 'repetitions'>('weight');

  days.forEach(day => {
    day.formattedDate = formatDateFromDatabase(day.date)
  })

  return (
    <Card decoration='top' decorationColor='green' maxWidth='max-w-full'>
      <div className="md:flex justify-between">
        <Block>
          <Flex justifyContent="justify-start" spaceX="space-x-0.5" alignItems="items-center">
            <Title>Exercise Statistics</Title>
            <Icon
              Icon={Info}
              variant="simple"
              tooltip="Shows changes of weight and repetitions during time"
              color='green'
            />
          </Flex>
          <Text>Increase or decrease per domain</Text>
        </Block>
        <div className="mt-6 md:mt-0">
          <Toggle
            color="zinc"
            defaultValue={selectedOption}
            handleSelect={(value) => setSelectedOption(value)}
          >
            <ToggleItem value="weight" text="Weight" />
            <ToggleItem value="repetitions" text="Repetitions" />
          </Toggle>
        </div>
      </div>
      <AreaChart
        data={days}
        dataKey='formattedDate'
        categories={[selectedOption]}
        colors={['green']}
        showLegend={false}
        valueFormatter={numberFormatter}
        yAxisWidth="w-14"
        height="h-96"
        marginTop='mt-8'
      />
    </Card>
  );
}