import { cn } from '@/lib/cn';
import * as LabelPrimitive from '@radix-ui/react-label';
import type * as React from 'react';

export function Label({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      className={cn('font-medium text-fg text-sm leading-none', className)}
      {...props}
    />
  );
}
