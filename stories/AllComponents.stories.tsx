import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  // Base Components
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
  
  // Form Components
  Select,
  Checkbox,
  Radio,
  RadioGroup,
  Toggle,
  FormField,
  Form,
  
  // Navigation Components
  Header,
  HeaderNavItem,
  Breadcrumbs,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  
  // Feedback Components
  Alert,
  Loading,
  Skeleton,
  
  // Layout Components
  Stack,
  HStack,
  VStack,
  Divider,
  Spacer,
  Center,
} from '../src';

const meta: Meta = {
  title: 'Overview/All Components',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete showcase of all available ShoreAgents UI components with different variants and states.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const AllComponentsShowcase = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
    country: '',
    notifications: false,
    plan: '',
    darkMode: false,
  });

  const [activeTab, setActiveTab] = useState('overview');

  const selectOptions = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'au', label: 'Australia' },
  ];

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Documentation', href: '/docs' },
    { label: 'Components', href: '/docs/components' },
    { label: 'Overview' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header
        variant="primary"
        sticky
        logo={
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SA</span>
            </div>
            <span className="font-bold text-lg">ShoreAgents UI</span>
          </div>
        }
        navigation={
          <>
            <HeaderNavItem href="/" active>Components</HeaderNavItem>
            <HeaderNavItem href="/docs">Documentation</HeaderNavItem>
            <HeaderNavItem href="/examples">Examples</HeaderNavItem>
          </>
        }
        actions={
          <HStack spacing="sm">
            <Badge variant="success">v1.0.0</Badge>
            <Button size="sm">Get Started</Button>
          </HStack>
        }
      />

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbItems} homeIcon />

        {/* Page Header */}
        <VStack spacing="md" className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            ShoreAgents UI Component Library
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Complete showcase of all available components with different variants, states, and real-world examples
          </p>
          
          <HStack spacing="sm" justify="center">
            <Badge variant="primary">React</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="accent">Tailwind</Badge>
            <Badge variant="success">Accessible</Badge>
          </HStack>
        </VStack>

        {/* Main Content with Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="forms">Forms</TabsTrigger>
            <TabsTrigger value="navigation">Navigation</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
            <TabsTrigger value="layout">Layout</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <VStack spacing="xl">
              {/* Button Showcase */}
              <Card>
                <CardHeader>
                  <CardTitle>Button Components</CardTitle>
                  <CardDescription>Interactive buttons with multiple variants and states</CardDescription>
                </CardHeader>
                <CardContent>
                  <VStack spacing="md">
                    <div>
                      <h4 className="font-medium mb-3">Variants</h4>
                      <HStack spacing="sm" wrap>
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="link">Link</Button>
                        <Button variant="destructive">Destructive</Button>
                      </HStack>
                    </div>
                    
                    <Divider />
                    
                    <div>
                      <h4 className="font-medium mb-3">Sizes & States</h4>
                      <HStack spacing="sm" wrap>
                        <Button size="xs">Extra Small</Button>
                        <Button size="sm">Small</Button>
                        <Button size="md">Medium</Button>
                        <Button size="lg">Large</Button>
                        <Button loading>Loading</Button>
                        <Button disabled>Disabled</Button>
                      </HStack>
                    </div>
                  </VStack>
                </CardContent>
              </Card>

              {/* Cards & Layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card variant="default">
                  <CardHeader>
                    <CardTitle>Default Card</CardTitle>
                    <CardDescription>Standard card styling</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Center className="h-20">
                      <Loading variant="spinner" />
                    </Center>
                  </CardContent>
                </Card>

                <Card variant="outlined">
                  <CardHeader>
                    <CardTitle>Outlined Card</CardTitle>
                    <CardDescription>Prominent borders</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <HStack>
                      <Avatar fallback="JD" />
                      <VStack spacing="none">
                        <p className="font-medium">John Doe</p>
                        <p className="text-sm text-gray-500">Software Engineer</p>
                      </VStack>
                    </HStack>
                  </CardContent>
                </Card>

                <Card variant="elevated" hover>
                  <CardHeader>
                    <CardTitle>Elevated Card</CardTitle>
                    <CardDescription>Shadow & hover effects</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <VStack spacing="sm">
                      <Badge variant="success">Active</Badge>
                      <Skeleton height={40} />
                      <Skeleton height={20} width="60%" />
                    </VStack>
                  </CardContent>
                </Card>
              </div>
            </VStack>
          </TabsContent>

          {/* Forms Tab */}
          <TabsContent value="forms">
            <Card>
              <CardHeader>
                <CardTitle>Form Components</CardTitle>
                <CardDescription>Complete form controls with validation</CardDescription>
              </CardHeader>
              <CardContent>
                <Form onSubmit={(e) => e.preventDefault()}>
                  <VStack spacing="lg">
                    {/* Input Components */}
                    <HStack spacing="lg" align="start">
                      <VStack spacing="md" className="flex-1">
                        <Input
                          label="Email Address"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        />
                        
                        <Select
                          label="Country"
                          options={selectOptions}
                          value={formData.country}
                          onChange={(value) => setFormData(prev => ({ ...prev, country: value }))}
                          placeholder="Select a country"
                        />
                      </VStack>
                      
                      <VStack spacing="md" className="flex-1">
                        <Textarea
                          label="Message"
                          placeholder="Enter your message..."
                          value={formData.message}
                          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        />
                      </VStack>
                    </HStack>

                    <Divider />

                    {/* Checkbox & Toggle */}
                    <HStack spacing="xl">
                      <Checkbox
                        label="Email Notifications"
                        description="Receive updates via email"
                        checked={formData.notifications}
                        onChange={(checked) => setFormData(prev => ({ ...prev, notifications: checked }))}
                      />
                      
                      <Toggle
                        label="Dark Mode"
                        description="Enable dark theme"
                        checked={formData.darkMode}
                        onChange={(checked) => setFormData(prev => ({ ...prev, darkMode: checked }))}
                      />
                    </HStack>

                    {/* Radio Group */}
                    <RadioGroup
                      label="Subscription Plan"
                      name="plan"
                      value={formData.plan}
                      onChange={(value) => setFormData(prev => ({ ...prev, plan: value }))}
                    >
                      <Radio value="free" label="Free Plan" description="Basic features included" />
                      <Radio value="pro" label="Pro Plan" description="Advanced features and priority support" />
                      <Radio value="enterprise" label="Enterprise" description="Custom solutions for large teams" />
                    </RadioGroup>

                    <HStack justify="end" spacing="sm">
                      <Button variant="outline">Cancel</Button>
                      <Button variant="primary">Save Changes</Button>
                    </HStack>
                  </VStack>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Navigation Tab */}
          <TabsContent value="navigation">
            <VStack spacing="lg">
              <Alert variant="info" title="Navigation Components">
                These components help users navigate through your application with clear wayfinding.
              </Alert>

              <Card>
                <CardHeader>
                  <CardTitle>Tab Navigation Example</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="dashboard">
                    <TabsList>
                      <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                      <TabsTrigger value="analytics">Analytics</TabsTrigger>
                      <TabsTrigger value="settings">Settings</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="dashboard">
                      <Center className="h-40 border-2 border-dashed border-gray-200 rounded-lg">
                        <VStack>
                          <h3 className="font-semibold">Dashboard Content</h3>
                          <p className="text-gray-500">Your main dashboard view</p>
                        </VStack>
                      </Center>
                    </TabsContent>
                    
                    <TabsContent value="analytics">
                      <Center className="h-40 border-2 border-dashed border-gray-200 rounded-lg">
                        <VStack>
                          <h3 className="font-semibold">Analytics Content</h3>
                          <p className="text-gray-500">Data and insights</p>
                        </VStack>
                      </Center>
                    </TabsContent>
                    
                    <TabsContent value="settings">
                      <Center className="h-40 border-2 border-dashed border-gray-200 rounded-lg">
                        <VStack>
                          <h3 className="font-semibold">Settings Content</h3>
                          <p className="text-gray-500">Configuration options</p>
                        </VStack>
                      </Center>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </VStack>
          </TabsContent>

          {/* Feedback Tab */}
          <TabsContent value="feedback">
            <VStack spacing="lg">
              {/* Alert Examples */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Alert variant="success" title="Success!" description="Your changes have been saved successfully." dismissible />
                <Alert variant="warning" title="Warning" description="This action cannot be undone." />
                <Alert variant="destructive" title="Error" description="Something went wrong. Please try again." dismissible />
                <Alert variant="info" title="Information" description="New features are now available." />
              </div>

              {/* Loading States */}
              <Card>
                <CardHeader>
                  <CardTitle>Loading States</CardTitle>
                  <CardDescription>Different loading indicators and skeleton screens</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <VStack align="center">
                      <h4 className="font-medium">Spinner</h4>
                      <Loading variant="spinner" size="lg" />
                    </VStack>
                    
                    <VStack align="center">
                      <h4 className="font-medium">Dots</h4>
                      <Loading variant="dots" size="lg" />
                    </VStack>
                    
                    <VStack align="center">
                      <h4 className="font-medium">Pulse</h4>
                      <Loading variant="pulse" size="lg" />
                    </VStack>
                    
                    <VStack align="center">
                      <h4 className="font-medium">Skeleton</h4>
                      <VStack spacing="sm" className="w-full">
                        <Skeleton height={16} />
                        <Skeleton height={16} width="80%" />
                        <Skeleton height={16} width="60%" />
                      </VStack>
                    </VStack>
                  </div>
                </CardContent>
              </Card>
            </VStack>
          </TabsContent>

          {/* Layout Tab */}
          <TabsContent value="layout">
            <VStack spacing="lg">
              <Alert variant="default" title="Layout Components">
                Powerful layout primitives for building consistent interfaces.
              </Alert>

              <Card>
                <CardHeader>
                  <CardTitle>Stack & Spacing Examples</CardTitle>
                </CardHeader>
                <CardContent>
                  <VStack spacing="xl">
                    {/* HStack Example */}
                    <div>
                      <h4 className="font-medium mb-3">Horizontal Stack (HStack)</h4>
                      <HStack spacing="md" className="p-4 bg-gray-100 rounded-lg">
                        <Badge variant="primary">Item 1</Badge>
                        <Badge variant="secondary">Item 2</Badge>
                        <Spacer />
                        <Badge variant="accent">End Item</Badge>
                      </HStack>
                    </div>

                    <Divider label="Divider with Label" />

                    {/* VStack Example */}
                    <div>
                      <h4 className="font-medium mb-3">Vertical Stack (VStack)</h4>
                      <VStack spacing="sm" className="p-4 bg-gray-100 rounded-lg max-w-xs">
                        <Avatar fallback="UI" />
                        <p className="font-medium">Component Library</p>
                        <p className="text-sm text-gray-600 text-center">
                          Professional UI components for React applications
                        </p>
                        <Button size="sm" fullWidth>Learn More</Button>
                      </VStack>
                    </div>

                    {/* Center Example */}
                    <div>
                      <h4 className="font-medium mb-3">Center Component</h4>
                      <Center className="h-32 bg-primary-50 rounded-lg">
                        <VStack spacing="sm">
                          <Badge variant="primary" size="lg">Centered Content</Badge>
                          <p className="text-sm text-gray-600">Perfectly centered</p>
                        </VStack>
                      </Center>
                    </div>
                  </VStack>
                </CardContent>
              </Card>
            </VStack>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <Divider />
        
        <Center className="py-8">
          <VStack spacing="sm">
            <p className="text-gray-600 font-medium">
              🎉 Complete ShoreAgents UI Component Library
            </p>
            <p className="text-sm text-gray-500">
              Built with React, TypeScript, and Tailwind CSS
            </p>
            <HStack spacing="sm">
              <Badge variant="primary" size="sm">20+ Components</Badge>
              <Badge variant="secondary" size="sm">Type Safe</Badge>
              <Badge variant="accent" size="sm">Accessible</Badge>
              <Badge variant="success" size="sm">Customizable</Badge>
            </HStack>
          </VStack>
        </Center>
      </div>
    </div>
  );
};

export const AllComponents: Story = {
  render: () => <AllComponentsShowcase />,
  parameters: {
    docs: {
      description: {
        story: 'A comprehensive showcase of all available components in the ShoreAgents UI library with real-world examples and interactive demonstrations.',
      },
    },
  },
}; 