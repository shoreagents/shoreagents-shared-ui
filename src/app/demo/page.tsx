"use client"

import React, { useState } from "react"

// Import all UI components
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Checkbox } from "@/components/ui/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@/components/ui/command"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { Label } from "@/components/ui/label"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Toaster } from "@/components/ui/sonner"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Icons
import { AlertCircle, Bell, Calendar as CalendarIcon, ChevronDown, File, Home, Info, Laptop, Menu, Settings, User, X } from "lucide-react"
import { Bar, BarChart, Line, LineChart, Pie, PieChart, Cell, ResponsiveContainer } from "recharts"

export default function DemoPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [open, setOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [otp, setOtp] = useState("")
  const [sliderValue, setSliderValue] = useState([50])
  const [progress, setProgress] = useState(65)

  // Sample data
  const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
  ]

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="border-b">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold tracking-tight mb-2">
              ShoreAgents UI Components Demo
            </h1>
            <p className="text-xl text-muted-foreground">
              Showcasing all 46 shadcn/ui components in action
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 space-y-12">
          {/* Navigation Components Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Navigation Components</h2>
            
            {/* Breadcrumb */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Breadcrumb</h3>
              <p className="text-sm text-muted-foreground mb-4">Navigation breadcrumbs</p>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/products">Products</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/products/laptops">Laptops</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>MacBook Pro</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            {/* Menubar */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Menubar</h3>
              <p className="text-sm text-muted-foreground mb-4">Application menu bar</p>
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>File</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>New Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Share</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Print</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Edit</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>Undo</MenubarItem>
                    <MenubarItem>Redo</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Cut</MenubarItem>
                    <MenubarItem>Copy</MenubarItem>
                    <MenubarItem>Paste</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>View</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>Reload</MenubarItem>
                    <MenubarItem>Force Reload</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Toggle Fullscreen</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>

            {/* Navigation Menu */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Navigation Menu</h3>
              <p className="text-sm text-muted-foreground mb-4">Main site navigation</p>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Laptops</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Browse our collection of laptops
                          </p>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Phones</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Latest smartphones and accessories
                          </p>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      About
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Contact
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Pagination */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Pagination</h3>
              <p className="text-sm text-muted-foreground mb-4">Page navigation controls</p>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>

            {/* Sidebar */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Sidebar</h3>
              <p className="text-sm text-muted-foreground mb-4">Collapsible navigation sidebar</p>
              <div className="h-96 border rounded-lg">
                <SidebarProvider>
                  <Sidebar>
                    <SidebarHeader>
                      <h4 className="font-semibold">Dashboard</h4>
                    </SidebarHeader>
                    <SidebarContent>
                      <SidebarGroup>
                        <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                        <SidebarGroupContent>
                          <SidebarMenu>
                            <SidebarMenuItem>
                              <SidebarMenuButton>
                                <Home className="h-4 w-4" />
                                <span>Home</span>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                              <SidebarMenuButton>
                                <User className="h-4 w-4" />
                                <span>Profile</span>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                              <SidebarMenuButton>
                                <Settings className="h-4 w-4" />
                                <span>Settings</span>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          </SidebarMenu>
                        </SidebarGroupContent>
                      </SidebarGroup>
                    </SidebarContent>
                    <SidebarFooter>
                      <SidebarMenu>
                        <SidebarMenuItem>
                          <SidebarMenuButton>
                            <User className="h-4 w-4" />
                            <span>User Account</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </SidebarFooter>
                  </Sidebar>
                  <main className="flex-1 p-4">
                    <SidebarTrigger />
                    <p className="mt-4 text-sm text-muted-foreground">Main content area</p>
                  </main>
                </SidebarProvider>
              </div>
            </div>
          </section>
          
          {/* Form Components Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Form Components</h2>
            
            {/* Button */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Button</h3>
              <p className="text-sm text-muted-foreground mb-4">Various button styles and sizes</p>
              <div className="flex flex-wrap gap-2">
                <Button variant="default">Default</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button size="sm">Small</Button>
                <Button size="lg">Large</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>

            {/* Input */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Input</h3>
              <p className="text-sm text-muted-foreground mb-4">Text input field</p>
              <div className="max-w-sm">
                <Input type="email" placeholder="Enter your email" />
              </div>
            </div>

            {/* Input OTP */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Input OTP</h3>
              <p className="text-sm text-muted-foreground mb-4">One-time password input</p>
              <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>

            {/* Textarea */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Textarea</h3>
              <p className="text-sm text-muted-foreground mb-4">Multi-line text input</p>
              <div className="max-w-sm">
                <Textarea placeholder="Type your message here..." />
              </div>
            </div>

            {/* Label */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Label</h3>
              <p className="text-sm text-muted-foreground mb-4">Form field labels</p>
              <div className="max-w-sm space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
            </div>

            {/* Checkbox */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Checkbox</h3>
              <p className="text-sm text-muted-foreground mb-4">Selection checkbox</p>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
              </div>
            </div>

            {/* Radio Group */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Radio Group</h3>
              <p className="text-sm text-muted-foreground mb-4">Single selection from options</p>
              <RadioGroup defaultValue="card">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card">Credit Card</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <Label htmlFor="paypal">PayPal</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="bank" id="bank" />
                  <Label htmlFor="bank">Bank Transfer</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Select */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Select</h3>
              <p className="text-sm text-muted-foreground mb-4">Dropdown selection</p>
              <div className="max-w-sm">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Switch */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Switch</h3>
              <p className="text-sm text-muted-foreground mb-4">Toggle switch</p>
              <div className="flex items-center space-x-2">
                <Switch id="notifications" />
                <Label htmlFor="notifications">Email notifications</Label>
              </div>
            </div>

            {/* Toggle */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Toggle</h3>
              <p className="text-sm text-muted-foreground mb-4">Toggle button</p>
              <Toggle>Bold</Toggle>
            </div>

            {/* Toggle Group */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Toggle Group</h3>
              <p className="text-sm text-muted-foreground mb-4">Multiple toggle selection</p>
              <ToggleGroup type="single" defaultValue="center">
                <ToggleGroupItem value="left">Left</ToggleGroupItem>
                <ToggleGroupItem value="center">Center</ToggleGroupItem>
                <ToggleGroupItem value="right">Right</ToggleGroupItem>
              </ToggleGroup>
            </div>

            {/* Slider */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Slider</h3>
              <p className="text-sm text-muted-foreground mb-4">Range slider control</p>
              <div className="max-w-sm space-y-2">
                <Slider
                  defaultValue={[50]}
                  max={100}
                  step={1}
                  value={sliderValue}
                  onValueChange={setSliderValue}
                />
                <p className="text-sm text-muted-foreground">Value: {sliderValue[0]}</p>
              </div>
            </div>
          </section>
          
          {/* Layout Components Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Layout Components</h2>
            
            {/* Card */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Card</h3>
              <p className="text-sm text-muted-foreground mb-4">Content container with header, body and footer</p>
              <div className="max-w-sm">
                <Card>
                  <CardHeader>
                    <CardTitle>MacBook Pro</CardTitle>
                    <CardDescription>Latest M3 chip with incredible performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Experience the power of Apple silicon with the new MacBook Pro featuring the M3 chip.</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Buy Now - $1,999</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>

            {/* Separator */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Separator</h3>
              <p className="text-sm text-muted-foreground mb-4">Visual divider between content</p>
              <div className="max-w-sm">
                <div className="space-y-1">
                  <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
                  <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
                </div>
                <Separator className="my-4" />
                <div className="flex h-5 items-center space-x-4 text-sm">
                  <div>Blog</div>
                  <Separator orientation="vertical" />
                  <div>Docs</div>
                  <Separator orientation="vertical" />
                  <div>Source</div>
                </div>
              </div>
            </div>

            {/* Aspect Ratio */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Aspect Ratio</h3>
              <p className="text-sm text-muted-foreground mb-4">Maintains aspect ratio for content</p>
              <div className="max-w-sm">
                <AspectRatio ratio={16 / 9} className="bg-muted">
                  <div className="flex items-center justify-center h-full text-sm text-muted-foreground">
                    16:9 Aspect Ratio
                  </div>
                </AspectRatio>
              </div>
            </div>

            {/* Resizable */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Resizable</h3>
              <p className="text-sm text-muted-foreground mb-4">Split panel layout with resizable divider</p>
              <div className="h-64 w-full border rounded-lg">
                <ResizablePanelGroup direction="horizontal" className="w-full rounded-lg border">
                  <ResizablePanel defaultSize={25}>
                    <div className="flex h-full items-center justify-center p-6">
                      <span className="font-semibold">Sidebar</span>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle />
                  <ResizablePanel defaultSize={75}>
                    <div className="flex h-full items-center justify-center p-6">
                      <span className="font-semibold">Main Content</span>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </div>
            </div>

            {/* Scroll Area */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Scroll Area</h3>
              <p className="text-sm text-muted-foreground mb-4">Scrollable content area</p>
              <div className="max-w-sm">
                <ScrollArea className="h-72 w-48 rounded-md border">
                  <div className="p-4">
                    <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                    {Array.from({ length: 50 }).map((_, i) => (
                      <div key={i} className="text-sm mb-2">
                        Tag {i + 1}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </div>

            {/* Table */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Table</h3>
              <p className="text-sm text-muted-foreground mb-4">Data table with rows and columns</p>
              <div className="max-w-2xl">
                <Table>
                  <TableCaption>A list of recent users.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">John Doe</TableCell>
                      <TableCell>john@example.com</TableCell>
                      <TableCell>Admin</TableCell>
                      <TableCell className="text-right">
                        <Badge variant="default">Active</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Jane Smith</TableCell>
                      <TableCell>jane@example.com</TableCell>
                      <TableCell>User</TableCell>
                      <TableCell className="text-right">
                        <Badge variant="secondary">Pending</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Bob Johnson</TableCell>
                      <TableCell>bob@example.com</TableCell>
                      <TableCell>Editor</TableCell>
                      <TableCell className="text-right">
                        <Badge variant="default">Active</Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Tabs */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Tabs</h3>
              <p className="text-sm text-muted-foreground mb-4">Tabbed content panels</p>
              <div className="max-w-md">
                <Tabs defaultValue="account" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="security">Security</TabsTrigger>
                    <TabsTrigger value="notifications">Notifications</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account" className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" defaultValue="John Doe" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" defaultValue="@johndoe" />
                    </div>
                  </TabsContent>
                  <TabsContent value="security" className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="current">Current password</Label>
                      <Input id="current" type="password" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="new">New password</Label>
                      <Input id="new" type="password" />
                    </div>
                  </TabsContent>
                  <TabsContent value="notifications" className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="marketing-emails">Marketing emails</Label>
                      <Switch id="marketing-emails" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="security-emails">Security emails</Label>
                      <Switch id="security-emails" defaultChecked />
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            {/* Accordion */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Accordion</h3>
              <p className="text-sm text-muted-foreground mb-4">Collapsible content sections</p>
              <div className="max-w-md">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is it styled?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It comes with default styles that matches the other components&apos; aesthetic.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is it animated?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It&apos;s animated by default, but you can disable it if you prefer.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            {/* Collapsible */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Collapsible</h3>
              <p className="text-sm text-muted-foreground mb-4">Expandable content area</p>
              <div className="max-w-md">
                <Collapsible open={isCollapsed} onOpenChange={setIsCollapsed} className="w-full space-y-2">
                  <div className="flex items-center justify-between space-x-4 px-4">
                    <h4 className="text-sm font-semibold">
                      @peduarte starred 3 repositories
                    </h4>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="w-9 p-0">
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                  <div className="rounded-md border px-4 py-3 font-mono text-sm">
                    @radix-ui/primitives
                  </div>
                  <CollapsibleContent className="space-y-2">
                    <div className="rounded-md border px-4 py-3 font-mono text-sm">
                      @radix-ui/colors
                    </div>
                    <div className="rounded-md border px-4 py-3 font-mono text-sm">
                      @stitches/react
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
          </section>
          
          {/* Feedback Components Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Feedback Components</h2>
            
            {/* Alert */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Alert</h3>
              <p className="text-sm text-muted-foreground mb-4">Status and notification messages</p>
              <div className="space-y-4 max-w-md">
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>Heads up!</AlertTitle>
                  <AlertDescription>
                    You can add components to your app using the cli.
                  </AlertDescription>
                </Alert>
                
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    Your session has expired. Please log in again.
                  </AlertDescription>
                </Alert>
              </div>
            </div>

            {/* Badge */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Badge</h3>
              <p className="text-sm text-muted-foreground mb-4">Status indicators and labels</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="default">New</Badge>
                <Badge variant="secondary">Sale</Badge>
                <Badge variant="destructive">Sold Out</Badge>
                <Badge variant="outline">Featured</Badge>
              </div>
            </div>

            {/* Progress */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Progress</h3>
              <p className="text-sm text-muted-foreground mb-4">Progress indicator bar</p>
              <div className="max-w-md space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Uploading file...</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} className="w-full" />
                <div className="flex gap-2">
                  <Button size="sm" onClick={() => setProgress(Math.max(0, progress - 10))}>
                    -10%
                  </Button>
                  <Button size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>
                    +10%
                  </Button>
                </div>
              </div>
            </div>

            {/* Skeleton */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Skeleton</h3>
              <p className="text-sm text-muted-foreground mb-4">Loading placeholder</p>
              <div className="flex items-center space-x-4 max-w-md">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            </div>

            {/* Toaster (Sonner) */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Toaster (Sonner)</h3>
              <p className="text-sm text-muted-foreground mb-4">Toast notifications</p>
              <Button 
                onClick={() => {
                  // This would trigger a toast notification in a real app
                  alert("In a real app, this would show a toast notification!")
                }}
              >
                Show Toast
              </Button>
              <Toaster />
            </div>
          </section>
          
          {/* Overlay Components Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Overlay Components</h2>
            
            {/* Dialog */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Dialog</h3>
              <p className="text-sm text-muted-foreground mb-4">Modal dialog window</p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Edit Profile</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you&apos;re done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Username
                      </Label>
                      <Input id="username" defaultValue="@peduarte" className="col-span-3" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            {/* Alert Dialog */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Alert Dialog</h3>
              <p className="text-sm text-muted-foreground mb-4">Confirmation dialog</p>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive">Delete Account</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete your
                      account and remove your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>

            {/* Sheet */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Sheet</h3>
              <p className="text-sm text-muted-foreground mb-4">Slide-out panel</p>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Open Settings</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Edit settings</SheetTitle>
                    <SheetDescription>
                      Make changes to your settings here. Click save when you&apos;re done.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Username
                      </Label>
                      <Input id="username" defaultValue="@peduarte" className="col-span-3" />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit">Save changes</Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Drawer */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Drawer</h3>
              <p className="text-sm text-muted-foreground mb-4">Mobile-optimized slide-up panel</p>
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="outline">Open Drawer</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                    <DrawerDescription>This action cannot be undone.</DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>

            {/* Popover */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Popover</h3>
              <p className="text-sm text-muted-foreground mb-4">Floating content panel</p>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Open popover</Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Dimensions</h4>
                      <p className="text-sm text-muted-foreground">
                        Set the dimensions for the layer.
                      </p>
                    </div>
                    <div className="grid gap-2">
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="width">Width</Label>
                        <Input
                          id="width"
                          defaultValue="100%"
                          className="col-span-2 h-8"
                        />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="maxWidth">Max. width</Label>
                        <Input
                          id="maxWidth"
                          defaultValue="300px"
                          className="col-span-2 h-8"
                        />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="height">Height</Label>
                        <Input
                          id="height"
                          defaultValue="25px"
                          className="col-span-2 h-8"
                        />
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            {/* Hover Card */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Hover Card</h3>
              <p className="text-sm text-muted-foreground mb-4">Content shown on hover</p>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link">@nextjs</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/vercel.png" />
                      <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">@nextjs</h4>
                      <p className="text-sm">
                        The React Framework – created and maintained by @vercel.
                      </p>
                      <div className="flex items-center pt-2">
                        <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                        <span className="text-xs text-muted-foreground">
                          Joined December 2021
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>

            {/* Tooltip */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Tooltip</h3>
              <p className="text-sm text-muted-foreground mb-4">Helpful text on hover</p>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Hover me</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add to library</p>
                </TooltipContent>
              </Tooltip>
            </div>

            {/* Dropdown Menu */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Dropdown Menu</h3>
              <p className="text-sm text-muted-foreground mb-4">Context menu with actions</p>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Open Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Context Menu */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Context Menu</h3>
              <p className="text-sm text-muted-foreground mb-4">Right-click context menu</p>
              <ContextMenu>
                <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
                  Right click here
                </ContextMenuTrigger>
                <ContextMenuContent className="w-64">
                  <ContextMenuItem>Back</ContextMenuItem>
                  <ContextMenuItem>Forward</ContextMenuItem>
                  <ContextMenuItem>Reload</ContextMenuItem>
                  <ContextMenuItem>More Tools</ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            </div>

            {/* Command */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Command</h3>
              <p className="text-sm text-muted-foreground mb-4">Command palette interface</p>
              <div className="max-w-sm">
                <Button
                  variant="outline"
                  className="w-full justify-start text-sm text-muted-foreground"
                  onClick={() => setOpen(true)}
                >
                  <span>Search...</span>
                  <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                    <span className="text-xs">⌘</span>K
                  </kbd>
                </Button>
                <CommandDialog open={open} onOpenChange={setOpen}>
                  <CommandInput placeholder="Type a command or search..." />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                      <CommandItem>Calendar</CommandItem>
                      <CommandItem>Search Emoji</CommandItem>
                      <CommandItem>Calculator</CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Settings">
                      <CommandItem>Profile</CommandItem>
                      <CommandItem>Billing</CommandItem>
                      <CommandItem>Settings</CommandItem>
                    </CommandGroup>
                  </CommandList>
                </CommandDialog>
              </div>
            </div>
          </section>
          
          {/* Display Components Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Display Components</h2>
            
            {/* Avatar */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Avatar</h3>
              <p className="text-sm text-muted-foreground mb-4">User profile pictures with fallbacks</p>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
            </div>

            {/* Calendar */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Calendar</h3>
              <p className="text-sm text-muted-foreground mb-4">Date picker calendar</p>
              <div className="max-w-fit">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </div>
            </div>

            {/* Carousel */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Carousel</h3>
              <p className="text-sm text-muted-foreground mb-4">Image gallery with navigation</p>
              <div className="max-w-xs mx-auto">
                <Carousel className="w-full">
                  <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                              <span className="text-4xl font-semibold">{index + 1}</span>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>

            {/* Chart */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Chart</h3>
              <p className="text-sm text-muted-foreground mb-4">Data visualization charts</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                {/* Bar Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle>Bar Chart</CardTitle>
                    <CardDescription>Monthly desktop users</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={chartConfig} className="h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData}>
                          <Bar dataKey="desktop" fill="var(--color-desktop)" />
                          <ChartTooltip content={<ChartTooltipContent />} />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>

                {/* Line Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle>Line Chart</CardTitle>
                    <CardDescription>Monthly trends</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={chartConfig} className="h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData}>
                          <Line 
                            type="monotone" 
                            dataKey="desktop" 
                            stroke="var(--color-desktop)" 
                            strokeWidth={2}
                          />
                          <ChartTooltip content={<ChartTooltipContent />} />
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </div>
      </div>
    </TooltipProvider>
  )
} 