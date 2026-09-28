'use client'

import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

const CONSULTATION_FOR_OPTIONS = [
  { value: 'myself', label: 'Myself' },
  { value: 'someone-else', label: 'Someone else' },
  { value: 'team', label: 'My team or organisation' },
]

const TIMEFRAME_OPTIONS = [
  { value: 'asap', label: 'As soon as possible' },
  { value: 'within-a-month', label: 'Within a month' },
  { value: 'exploring', label: 'Just exploring' },
]

export function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false)
  const [consultationFor, setConsultationFor] = useState('')
  const [timeframe, setTimeframe] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-background px-8 py-16 text-center">
        <h3 className="font-serif text-2xl text-foreground">
          Your enquiry has been received.
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Disha&apos;s team reviews every enquiry personally and will reach
          out to schedule your discovery call.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-background p-5 sm:p-8"
    >
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <Input id="name" name="name" required />
        </Field>

        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" name="email" type="email" required />
        </Field>

        <Field>
          <FieldLabel htmlFor="phone">Phone</FieldLabel>
          <Input id="phone" name="phone" type="tel" required />
        </Field>

        <Field>
          <FieldLabel htmlFor="consultation-for">
            Who is this consultation for?
          </FieldLabel>
          <Select
            value={consultationFor}
            onValueChange={(value) => setConsultationFor(value ?? '')}
          >
            <SelectTrigger id="consultation-for" className="w-full">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {CONSULTATION_FOR_OPTIONS.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <input
            type="hidden"
            name="consultationFor"
            value={consultationFor}
            required
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="help-needed">
            What help do you need?
          </FieldLabel>
          <Textarea id="help-needed" name="helpNeeded" rows={4} required />
        </Field>

        <Field>
          <FieldLabel htmlFor="timeframe">Preferred timeframe</FieldLabel>
          <Select
            value={timeframe}
            onValueChange={(value) => setTimeframe(value ?? '')}
          >
            <SelectTrigger id="timeframe" className="w-full">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {TIMEFRAME_OPTIONS.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <input type="hidden" name="timeframe" value={timeframe} required />
        </Field>

        <Field>
          <FieldLabel htmlFor="location">Location</FieldLabel>
          <Input id="location" name="location" placeholder="City, Country" required />
        </Field>

        <Button type="submit" className="w-full" size="lg">
          Request a Discovery Call
        </Button>

        <p className="text-center text-xs leading-relaxed text-muted-foreground">
          Submitting this form does not guarantee a consultation. You will
          hear from us personally within 3&ndash;5 business days.
        </p>
      </FieldGroup>
    </form>
  )
}
