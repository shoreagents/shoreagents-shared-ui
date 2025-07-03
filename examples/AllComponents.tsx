import React, { useState } from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Input,
  Textarea,
  Badge,
  Avatar,
} from '../src';
import { 
  Heart, 
  Download, 
  Plus, 
  Mail, 
  Search, 
  User, 
  Settings,
  ShoppingCart,
  Star,
  AlertCircle,
  CheckCircle,
  Info
} from 'lucide-react';

export default function AllComponentsExample() {
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ShoreAgents Shared UI Components
          </h1>
          <p className="text-lg text-gray-600">
            Complete showcase of all available components with different variants
          </p>
        </div>

        {/* Button Components */}
        <Card>
          <CardHeader>
            <CardTitle>Button Components</CardTitle>
            <CardDescription>
              Various button variants, sizes, and states
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Button Variants */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Variants</h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
            </div>

            {/* Button Sizes */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Sizes</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="xs">Extra Small</Button>
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
                <Button size="xl">Extra Large</Button>
              </div>
            </div>

            {/* Button States */}
            <div>
              <h3 className="text-lg font-semibold mb-3">States</h3>
              <div className="flex flex-wrap gap-3">
                <Button>Normal</Button>
                <Button loading>Loading</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>

            {/* Button with Icons */}
            <div>
              <h3 className="text-lg font-semibold mb-3">With Icons</h3>
              <div className="flex flex-wrap gap-3">
                <Button leftIcon={<Heart className="h-4 w-4" />}>
                  Like
                </Button>
                <Button variant="outline" rightIcon={<Download className="h-4 w-4" />}>
                  Download
                </Button>
                <Button 
                  variant="secondary" 
                  leftIcon={<Plus className="h-4 w-4" />}
                  rightIcon={<Download className="h-4 w-4" />}
                >
                  Add & Download
                </Button>
              </div>
            </div>

            {/* Full Width Button */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Full Width</h3>
              <Button fullWidth variant="primary">
                Full Width Button
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Input Components */}
        <Card>
          <CardHeader>
            <CardTitle>Input Components</CardTitle>
            <CardDescription>
              Text inputs, textareas with various states and configurations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Basic Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
              />
            </div>

            {/* Input with Icons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Search"
                placeholder="Search..."
                leftIcon={<Search className="h-4 w-4" />}
              />
              <Input
                label="Email with Icon"
                type="email"
                placeholder="your@email.com"
                leftIcon={<Mail className="h-4 w-4" />}
              />
            </div>

            {/* Input States */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                label="Default State"
                placeholder="Normal input"
              />
              <Input
                label="Success State"
                variant="success"
                placeholder="Valid input"
                helperText="Looks good!"
              />
              <Input
                label="Error State"
                variant="error"
                placeholder="Invalid input"
                error="This field is required"
              />
            </div>

            {/* Input Sizes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                label="Small"
                size="sm"
                placeholder="Small input"
              />
              <Input
                label="Medium (Default)"
                size="md"
                placeholder="Medium input"
              />
              <Input
                label="Large"
                size="lg"
                placeholder="Large input"
              />
            </div>

            {/* Textarea */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Textarea</h3>
              <Textarea
                label="Message"
                placeholder="Enter your message here..."
                value={textareaValue}
                onChange={(e) => setTextareaValue(e.target.value)}
                helperText="Minimum 10 characters"
              />
            </div>
          </CardContent>
        </Card>

        {/* Badge Components */}
        <Card>
          <CardHeader>
            <CardTitle>Badge Components</CardTitle>
            <CardDescription>
              Status indicators and labels with different variants
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Badge Variants */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Variants</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="primary">Primary</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="accent">Accent</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="error">Error</Badge>
                <Badge variant="info">Info</Badge>
                <Badge variant="gray">Gray</Badge>
              </div>
            </div>

            {/* Badge Sizes */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Sizes</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Badge size="xs">XS</Badge>
                <Badge size="sm">Small</Badge>
                <Badge size="md">Medium</Badge>
                <Badge size="lg">Large</Badge>
                <Badge size="xl">XL</Badge>
              </div>
            </div>

            {/* Badge Shapes */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Shapes</h3>
              <div className="flex flex-wrap gap-3">
                <Badge rounded={true}>Rounded</Badge>
                <Badge rounded={false}>Square</Badge>
                <Badge dot variant="success" />
                <Badge dot variant="error" />
                <Badge dot variant="warning" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Avatar Components */}
        <Card>
          <CardHeader>
            <CardTitle>Avatar Components</CardTitle>
            <CardDescription>
              User profile images and fallbacks with different configurations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Avatar Sizes */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Sizes</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Avatar size="xs" fallback="XS" />
                <Avatar size="sm" fallback="SM" />
                <Avatar size="md" fallback="MD" />
                <Avatar size="lg" fallback="LG" />
                <Avatar size="xl" fallback="XL" />
              </div>
            </div>

            {/* Avatar with Initials */}
            <div>
              <h3 className="text-lg font-semibold mb-3">With Initials</h3>
              <div className="flex flex-wrap gap-4">
                <Avatar fallback="John Doe" />
                <Avatar fallback="Jane Smith" />
                <Avatar fallback="AB" />
                <Avatar fallback="CD" />
              </div>
            </div>

            {/* Avatar Shapes */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Shapes</h3>
              <div className="flex flex-wrap gap-4">
                <Avatar rounded={true} fallback="Round" />
                <Avatar rounded={false} fallback="Square" />
              </div>
            </div>

            {/* Avatar with Fallback Icon */}
            <div>
              <h3 className="text-lg font-semibold mb-3">With Fallback Icon</h3>
              <div className="flex flex-wrap gap-4">
                <Avatar />
                <Avatar>
                  <User className="h-6 w-6" />
                </Avatar>
                <Avatar>
                  <Settings className="h-6 w-6" />
                </Avatar>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card Variants */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card variant="default">
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
              <CardDescription>
                Standard card with default styling
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                This is a default card with standard border and background.
              </p>
            </CardContent>
            <CardFooter>
              <Button size="sm">Action</Button>
            </CardFooter>
          </Card>

          <Card variant="outlined">
            <CardHeader>
              <CardTitle>Outlined Card</CardTitle>
              <CardDescription>
                Card with prominent border
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                This card has a more prominent border and transparent background.
              </p>
            </CardContent>
            <CardFooter>
              <Button size="sm" variant="outline">Action</Button>
            </CardFooter>
          </Card>

          <Card variant="elevated" hover>
            <CardHeader>
              <CardTitle>Elevated Card</CardTitle>
              <CardDescription>
                Card with shadow and hover effect
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                This card has elevation shadow and hover effects.
              </p>
            </CardContent>
            <CardFooter>
              <Button size="sm" variant="secondary">Action</Button>
            </CardFooter>
          </Card>
        </div>

        {/* Complex Example */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              Shopping Cart
              <Badge variant="primary">3 items</Badge>
            </CardTitle>
            <CardDescription>
              Complete example combining multiple components
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <Avatar size="sm" fallback="P1" />
                <div>
                  <p className="font-medium">Product 1</p>
                  <p className="text-sm text-gray-500">Description here</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="success">
                  <Star className="h-3 w-3 mr-1" />
                  4.5
                </Badge>
                <span className="font-semibold">$29.99</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <Avatar size="sm" fallback="P2" />
                <div>
                  <p className="font-medium">Product 2</p>
                  <p className="text-sm text-gray-500">Another description</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="warning">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  Low Stock
                </Badge>
                <span className="font-semibold">$19.99</span>
              </div>
            </div>

            <Input
              label="Promo Code"
              placeholder="Enter promo code"
              rightIcon={<CheckCircle className="h-4 w-4 text-green-500" />}
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex items-center gap-2">
              <Info className="h-4 w-4 text-blue-500" />
              <span className="text-sm text-gray-600">Free shipping on orders over $50</span>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Continue Shopping</Button>
              <Button variant="primary">
                Checkout - $49.98
              </Button>
            </div>
          </CardFooter>
        </Card>

        {/* Footer */}
        <div className="text-center py-8">
          <p className="text-gray-600">
            🎉 All components from ShoreAgents Shared UI Library
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
} 