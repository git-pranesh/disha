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

const PROFESSION_OPTIONS = [
  { value: 'c-suite-executive', label: 'Senior Executive / C-Suite / Director' },
  { value: 'corporate-manager', label: 'Corporate Professional / Manager' },
  { value: 'entrepreneur', label: 'Entrepreneur / Business Owner' },
  { value: 'consultant-lawyer', label: 'Consultant / Legal / Finance Professional' },
  { value: 'creative-media', label: 'Creative / Media / Public Speaker' },
  { value: 'medical-healthcare', label: 'Healthcare / Medical Professional' },
  { value: 'other', label: 'Other Professional / Individual' },
]

const EXPERIENCE_OPTIONS = [
  { value: '0-3', label: 'Early Career (0-3 years)' },
  { value: '4-7', label: '4-7 years' },
  { value: '8-12', label: '8-12 years' },
  { value: '13-20', label: '13-20 years' },
  { value: '20+', label: '20+ years' },
]

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
  const [profession, setProfession] = useState('')
  const [experience, setExperience] = useState('')
  const [consultationFor, setConsultationFor] = useState('myself')
  const [timeframe, setTimeframe] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-background px-8 py-16 text-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <svg viewBox="0 0 20 20" fill="currentColor" className="size-7">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-foreground">
          Your enquiry has been received.
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Disha&apos;s team reviews every enquiry personally and will reach
          out within 24-48 hours to schedule your discovery call.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-background p-5 sm:p-8 shadow-xs"
    >
      <FieldGroup>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="name">Full Name</FieldLabel>
            <Input id="name" name="name" placeholder="Your name" required className="h-10 sm:h-11 text-xs sm:text-sm" />
          </Field>

          <Field>
            <FieldLabel htmlFor="email">Work / Personal Email</FieldLabel>
            <Input id="email" name="email" type="email" placeholder="you@domain.com" required className="h-10 sm:h-11 text-xs sm:text-sm" />
          </Field>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="phone">Phone / WhatsApp</FieldLabel>
            <Input id="phone" name="phone" type="tel" placeholder="+91 / +971 / +65 ..." required className="h-10 sm:h-11 text-xs sm:text-sm" />
          </Field>

          <Field>
            <FieldLabel htmlFor="location">City &amp; Country</FieldLabel>
            <Input id="location" name="location" placeholder="e.g. Chennai, India" required className="h-10 sm:h-11 text-xs sm:text-sm" />
          </Field>
        </div>

        {/* Profession & Experience Dropdowns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="profession">Profession / Industry</FieldLabel>
            <Select
              value={profession}
              onValueChange={(value) => setProfession(value ?? '')}
            >
              <SelectTrigger id="profession" className="h-10 sm:h-11 w-full min-w-0 text-xs sm:text-sm">
                <SelectValue placeholder="Select your profession" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {PROFESSION_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <input type="hidden" name="profession" value={profession} required />
          </Field>

          <Field>
            <FieldLabel htmlFor="experience">Years of Experience</FieldLabel>
            <Select
              value={experience}
              onValueChange={(value) => setExperience(value ?? '')}
            >
              <SelectTrigger id="experience" className="h-10 sm:h-11 w-full min-w-0 text-xs sm:text-sm">
                <SelectValue placeholder="Select years of experience" />
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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="consultation-for">
              Who is this consultation for?
            </FieldLabel>
            <Select
              value={consultationFor}
              onValueChange={(value) => setConsultationFor(value ?? '')}
            >
              <SelectTrigger id="consultation-for" className="h-10 sm:h-11 w-full min-w-0 text-xs sm:text-sm">
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
            <FieldLabel htmlFor="timeframe">Preferred Timeframe</FieldLabel>
            <Select
              value={timeframe}
              onValueChange={(value) => setTimeframe(value ?? '')}
            >
              <SelectTrigger id="timeframe" className="h-10 sm:h-11 w-full min-w-0 text-xs sm:text-sm">
                <SelectValue placeholder="Select timeframe" />
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
        </div>

        <Field>
          <FieldLabel htmlFor="help-needed">
            What is your main wardrobe or image challenge?
          </FieldLabel>
          <Textarea
            id="help-needed"
            name="helpNeeded"
            rows={3}
            placeholder="e.g., Wardrobe feels dull, colours feel washed out, need executive polish for upcoming role..."
            required
          />
        </Field>

        <button
          type="submit"
          className="w-full min-h-[50px] mt-3 py-3 px-5 rounded-full bg-primary text-primary-foreground text-sm sm:text-base font-medium text-center shadow-sm hover:opacity-95 active:scale-[0.99] transition-all whitespace-normal leading-snug cursor-pointer flex items-center justify-center gap-2"
        >
          <span>Discover Your 12 Season Colour Palette</span>
          <span aria-hidden="true">&rarr;</span>
        </button>

        <p className="text-center text-xs leading-relaxed text-muted-foreground">
          Your details are confidential. Disha&apos;s team will contact you to confirm available consultation slots.
        </p>
      </FieldGroup>
    </form>
  )
}

