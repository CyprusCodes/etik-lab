import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  Calendar,
  FileText,
} from "lucide-react";
import {
  checkupPackages,
  specialPanels,
  getCategories,
  getTypes,
  getAgeGroups,
} from "@/data/checkupPackages";

// Expandable package card component
const PackageCard = ({ pkg, isSpecialPanel = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const allPackages = isSpecialPanel ? specialPanels : checkupPackages;

  return (
    <Card className="h-fit border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-200">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg leading-tight mb-2">
              {pkg.title}
            </CardTitle>
            <CardDescription className="text-sm">
              {pkg.description}
            </CardDescription>
          </div>
          <Badge variant="secondary" className="ml-2 text-xs whitespace-nowrap">
            {pkg.category}
          </Badge>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-3">
          <span className="flex items-center gap-1">
            <FileText className="w-4 h-4" />
            {pkg.tests.length} test
          </span>
          <Badge variant="outline" className="text-xs">
            {pkg.type}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {pkg.ageGroup}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-between p-0 h-auto text-sm font-medium mb-3 hover:bg-transparent"
            >
              <span>Test Listesi</span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </Button>
          </CollapsibleTrigger>

          <CollapsibleContent className="mb-4">
            <div className="bg-muted/30 rounded-lg p-4">
              <div className="grid gap-2">
                {pkg.tests.map((test, index) => (
                  <div
                    key={index}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium text-primary mt-0.5 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span>{test}</span>
                  </div>
                ))}
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Button className="w-full" asChild>
          <Link
            to="/randevu"
            className="inline-flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            Randevu Al
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export const CheckUpPackages = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [ageGroupFilter, setAgeGroupFilter] = useState("all");

  // Get filter options
  const categories = getCategories();
  const types = getTypes();
  const ageGroups = getAgeGroups();

  // Filter packages based on search and filters
  const filteredPackages = useMemo(() => {
    const allPackages = [...checkupPackages, ...specialPanels];

    return allPackages.filter((pkg) => {
      const matchesSearch =
        pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pkg.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pkg.tests.some((test) =>
          test.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory =
        categoryFilter === "all" || pkg.category === categoryFilter;
      const matchesType = typeFilter === "all" || pkg.type === typeFilter;
      const matchesAgeGroup =
        ageGroupFilter === "all" || pkg.ageGroup === ageGroupFilter;

      return matchesSearch && matchesCategory && matchesType && matchesAgeGroup;
    });
  }, [searchTerm, categoryFilter, typeFilter, ageGroupFilter]);

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setCategoryFilter("all");
    setTypeFilter("all");
    setAgeGroupFilter("all");
  };

  const hasActiveFilters =
    searchTerm !== "" ||
    categoryFilter !== "all" ||
    typeFilter !== "all" ||
    ageGroupFilter !== "all";

  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Check-Up Paketleri ve Panelleri
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sağlık ihtiyaçlarınıza uygun paketi bulun ve detaylarını inceleyin
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card border rounded-lg p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <h3 className="font-semibold">Arama ve Filtreleme</h3>
          </div>

          <div className="grid gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Paket adı, açıklama veya test adı ile arayın..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="grid md:grid-cols-3 gap-4">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Kategori seçin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tüm Kategoriler</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Tür seçin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tüm Türler</SelectItem>
                  {types.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={ageGroupFilter} onValueChange={setAgeGroupFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Yaş grubu seçin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tüm Yaş Grupları</SelectItem>
                  {ageGroups.map((ageGroup) => (
                    <SelectItem key={ageGroup} value={ageGroup}>
                      {ageGroup}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Clear filters */}
            {hasActiveFilters && (
              <div className="flex justify-end">
                <Button variant="outline" size="sm" onClick={clearFilters}>
                  Filtreleri Temizle
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            {filteredPackages.length} paket bulundu
            {hasActiveFilters && " (filtrelenmiş)"}
          </p>
        </div>

        {/* Package Grid */}
        {filteredPackages.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPackages.map((pkg) => {
              const isSpecialPanel = specialPanels.some(
                (panel) => panel.id === pkg.id
              );
              return (
                <PackageCard
                  key={pkg.id}
                  pkg={pkg}
                  isSpecialPanel={isSpecialPanel}
                />
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Sonuç bulunamadı</h3>
            <p className="text-muted-foreground mb-4">
              Arama kriterlerinize uygun paket bulunamadı.
            </p>
            <Button variant="outline" onClick={clearFilters}>
              Filtreleri Temizle
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
