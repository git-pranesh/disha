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

const EVENT_TYPES = ['Corporate', 'School', 'Private Event']

export function InviteForm() {
  const [submitted, setSubmitted] = useState(false)
  const [eventType, setEventType] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex min-h-[380px] flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-background px-8 py-16 text-center">
        <h3 className="font-serif text-2xl text-foreground">Your enquiry has been received.</h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Disha&apos;s team will review the details and get back to you shortly.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-background p-6 sm:p-8"
    >
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <Input id="name" name="name" required />
        </Field>

        <Field>
          <FieldLabel htmlFor="organisation">Organisation Name</FieldLabel>
          <Input id="organisation" name="organisation" required />
        </Field>

        <Field>
          <FieldLabel htmlFor="eventType">Event Type</FieldLabel>
          <Select value={eventType} onValueChange={(value) => setEventType(value ?? '')}>
            <SelectTrigger id="eventType" className="w-full">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {EVENT_TYPES.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <input type="hidden" name="eventType" value={eventType} required />
        </Field>

        <Field>
          <FieldLabel htmlFor="date">Approximate Date</FieldLabel>
          <Input id="date" name="date" type="date" required />
        </Field>

        <Field>
          <FieldLabel htmlFor="participants">Number of Participants</FieldLabel>
          <Input id="participants" name="participants" type="number" min={1} required />
        </Field>

        <Field>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Textarea id="message" name="message" rows={4} required />
        </Field>

        <Button type="submit" className="w-full" size="lg">
          Send Enquiry
        </Button>
      </FieldGroup>
    </form>
  )
}
