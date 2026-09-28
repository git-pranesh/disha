'use client'

import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Field, FieldDescription, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

const EXPERIENCE_OPTIONS = [
  { value: 'student', label: 'Student' },
  { value: '0-2', label: '0\u20132 years' },
  { value: '3-5', label: '3\u20135 years' },
  { value: '6-10', label: '6\u201310 years' },
  { value: '10+', label: '10+ years' },
]

export function InquiryForm() {
  const [submitted, setSubmitted] = useState(false)
  const [experience, setExperience] = useState('')
  const [mode, setMode] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-background px-8 py-16 text-center">
        <h3 className="font-serif text-2xl text-foreground">
          Your inquiry has been received.
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Disha&apos;s team will review your application and reach out within 3&ndash;5 business
          days.
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
          <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
          <Input id="fullName" name="fullName" required />
        </Field>

        <Field>
          <FieldLabel htmlFor="age">Age</FieldLabel>
          <Input id="age" name="age" type="number" min={1} required />
        </Field>

        <Field>
          <FieldLabel htmlFor="profession">Profession / Current Designation</FieldLabel>
          <Input id="profession" name="profession" required />
        </Field>

        <Field>
          <FieldLabel htmlFor="experience">Years of Experience in Your Industry</FieldLabel>
          <Select value={experience} onValueChange={(value) => setExperience(value ?? '')}>
            <SelectTrigger id="experience" className="w-full">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {EXPERIENCE_OPTIONS.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <input type="hidden" name="experience" value={experience} required />
        </Field>

        <Field>
          <FieldLabel htmlFor="location">City and Country of Residence</FieldLabel>
          <Input id="location" name="location" required />
        </Field>

        <Field>
          <FieldLabel htmlFor="mode-in-person-chennai" className="sr-only">
            Preferred Mode of Consultation
          </FieldLabel>
          <FieldDescription className="text-foreground">
            Preferred Mode of Consultation
          </FieldDescription>
          <RadioGroup value={mode} onValueChange={setMode} className="gap-2.5 pt-1">
            <div className="flex items-center gap-2.5">
              <RadioGroupItem value="chennai" id="mode-in-person-chennai" />
              <Label htmlFor="mode-in-person-chennai" className="font-normal">
                In-Person (Chennai)
              </Label>
            </div>
            <div className="flex items-center gap-2.5">
              <RadioGroupItem value="dubai" id="mode-in-person-dubai" />
              <Label htmlFor="mode-in-person-dubai" className="font-normal">
                In-Person (Dubai)
              </Label>
            </div>
            <div className="flex items-center gap-2.5">
              <RadioGroupItem value="virtual" id="mode-virtual" />
              <Label htmlFor="mode-virtual" className="font-normal">
                Virtual
              </Label>
            </div>
          </RadioGroup>
          <input type="hidden" name="mode" value={mode} required />
        </Field>

        <Field>
          <FieldLabel htmlFor="about">
            Your Query: Tell us about yourself and what you&apos;re looking for
          </FieldLabel>
          <Textarea id="about" name="about" rows={5} required />
        </Field>

        <Button type="submit" className="w-full" size="lg">
          Submit Your Inquiry
        </Button>

        <p className="text-center text-xs leading-relaxed text-muted-foreground">
          Submitting this form does not guarantee a consultation. You will hear from us within
          3&ndash;5 business days.
        </p>
      </FieldGroup>
    </form>
  )
}
