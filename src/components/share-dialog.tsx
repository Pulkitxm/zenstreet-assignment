"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Facebook, Mail, Share2, Linkedin, Copy, X } from 'lucide-react'
import { useState } from "react"

interface ShareDialogProps {
  isOpen: boolean
  onClose: () => void
  pageUrl: string
  socials: {
    facebook: string
    twitter: string
    linkedin: string
    mail: string
  }
}

export function ShareDialog({ isOpen, onClose, pageUrl, socials }: ShareDialogProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Share2 className="w-5 h-5" />
            Share Profile
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full"
              onClick={() => window.open(socials.facebook, '_blank')}
            >
              <Facebook className="w-5 h-5 text-[#1877F2]" />
              <span className="sr-only">Share on Facebook</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full"
              onClick={() => window.open(socials.twitter, '_blank')}
            >
              <X className="w-5 h-5" />
              <span className="sr-only">Share on Twitter</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full"
              onClick={() => window.open(socials.linkedin, '_blank')}
            >
              <Linkedin className="w-5 h-5 text-[#0A66C2]" />
              <span className="sr-only">Share on LinkedIn</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full"
              onClick={() => window.open(socials.mail, '_blank')}
            >
              <Mail className="w-5 h-5 text-gray-500" />
              <span className="sr-only">Share via Email</span>
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={pageUrl}
              readOnly
              className="flex-1 px-3 py-2 border rounded-md bg-muted"
            />
            <Button variant="outline" size="icon" onClick={handleCopy}>
              <Copy className="w-4 h-4" />
              <span className="sr-only">Copy link</span>
            </Button>
          </div>
          {copied && (
            <p className="text-sm text-center text-muted-foreground">Link copied to clipboard!</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
