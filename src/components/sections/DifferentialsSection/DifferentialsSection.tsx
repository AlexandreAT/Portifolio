import { MotionSection } from '@/components/MotionSection/MotionSection';
import { differentials } from '@/data/portfolio.data';
import { getIcon } from '@/utils/icons';
import { Card, Grid, Label } from './DifferentialsSection.style';

export const DifferentialsSection = () => (
  <MotionSection className="surface-section">
    <Label id="differentials-title">Diferenciais</Label>
    <Grid aria-labelledby="differentials-title">
      {differentials.map((differential) => {
        const Icon = getIcon(differential.icon);
        return (
          <Card key={differential.id}>
            <Icon aria-hidden="true" />
            <h2>{differential.title}</h2>
            <p>{differential.description}</p>
          </Card>
        );
      })}
    </Grid>
  </MotionSection>
);
